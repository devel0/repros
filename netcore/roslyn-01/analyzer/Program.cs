using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.MSBuild;
using Microsoft.CodeAnalysis;

namespace analyzer
{
    class Program
    {
        static void Main(string[] args)
        {
            Task.Run(async () =>
            {
                using (var wkspace = MSBuildWorkspace.Create())
                {
                    var prjPathfilename = "/src/test/test.csproj";
                    if (!File.Exists("/.dockerenv"))
                    {
                        prjPathfilename = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "../../../../test/test.csproj");
                    }                                        

                    System.Console.WriteLine("---> OpenProject");
                    var prj = await wkspace.OpenProjectAsync(prjPathfilename);
                    
                    ImmutableList<WorkspaceDiagnostic> diagnostics = wkspace.Diagnostics;
                    foreach (var diagnostic in diagnostics)
                    {
                        System.Console.WriteLine(diagnostic.Message);
                    }
                    
                    var cts = new CancellationTokenSource();
                    var ct = cts.Token;
                    System.Console.WriteLine("---> GetCompilation");
                    var compilation = await prj.GetCompilationAsync(ct);
                    System.Console.WriteLine($"has documents = {prj.HasDocuments}");
                }
            }).Wait();
        }
    }
}
