using BriefFiniteElementNet;
using BriefFiniteElementNet.Elements;
using BriefFiniteElementNet.Materials;

namespace cantilever_fixed_restraint;
class Program
{
    static void Main(string[] args)
    {
        var model = new Model();

        var l = 5;

        var n1 = new Node(0, 0, 0);
        var n2 = new Node(0, 0, l);

        var axialLoad = 1000;
        var horizontalLoad = 100000;

        var f = new Force(horizontalLoad, 0, axialLoad, 0, 0, 0);

        /**/
        var h = 0.1;
        var w = 0.05;

        var a = h * w;
        var iy = h * h * h * w / 12;
        var iz = w * w * w * h / 12;
        var j = iy + iz;
        var e = 210e9;
        var nu = 0.3;

        var g = e / (2 * 1 + nu);
        /**/

        var sec = new BriefFiniteElementNet.Sections.UniformParametric1DSection(a, iy, iz, j);
        var mat = UniformIsotropicMaterial.CreateFromYoungShear(e, g);

        var belm = new BarElement(n1, n2)
        {
            Material = mat,
            Section = sec,
            Behavior = BarElementBehaviours.FullFrame
        };
        model.Elements.Add(belm);
        model.Nodes.Add(n1, n2);

        n1.Constraints = Constraints.Fixed;

        n2.Loads.Add(new NodalLoad(f));

        model.Solve_MPC();

        var d = model.Nodes[1].GetNodalDisplacement();

        var expectedDx = (horizontalLoad * l * l * l) / (3 * e * iy);
        var expectedRy = (horizontalLoad * l * l) / (2 * e * iy);
        var expectedDz = axialLoad * l / (e * a);

        // var epsilon = 0.0;

        // if (Math.Abs(d.DX - expectedDx) > epsilon) throw new NotImplementedException();
        // if (Math.Abs(d.RY - expectedRy) > epsilon) throw new NotImplementedException();
        // if (Math.Abs(d.DZ - expectedDz) > epsilon) throw new NotImplementedException();

        System.Console.WriteLine($"node[0] dx = {model.Nodes[0].GetNodalDisplacement().DX}");
        System.Console.WriteLine($"beam disp at off=0 dx = {((BarElement)model.Elements[0]).GetGlobalDisplacementAt(0).DX}");
    }
}
