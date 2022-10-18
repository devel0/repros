namespace test_task_debounce;

public class DebounceTest
{

    public DebounceTest()
    {
        System.Console.WriteLine($"ctrl+c to exit");

        Console.CancelKeyPress += (a,b) =>
        {
            cts.Cancel();
            Environment.Exit(0);
        };
    }

    CancellationTokenSource cts = new CancellationTokenSource();

    public void NotWorking_DebounceTest()
    {                
        while (true)
        {
            var k = Console.ReadKey(intercept:true);            

            cts.Cancel();

            cts = new CancellationTokenSource();            

            System.Console.WriteLine($"[{DateTime.Now}] action started [token:{cts.Token.GetHashCode()}]");

            Task.Run(async() =>
            {
                await Task.Delay(1000);
                if (!cts.IsCancellationRequested)
                {
                    System.Console.WriteLine($"  --> [{DateTime.Now}] action executed [token:{cts.Token.GetHashCode()}]");
                }
            });
        }
    }

    public void Working_DebounceTest()
    {              
        while (true)
        {
            var k = Console.ReadKey(intercept:true);            

            cts.Cancel();

            cts = new CancellationTokenSource();

            var local_cts = cts; // save cts ref to local var used by lambda below

            System.Console.WriteLine($"[{DateTime.Now}] action started [token:{local_cts.Token.GetHashCode()}]");

            Task.Run(async() =>
            {
                await Task.Delay(1000);
                if (!local_cts.IsCancellationRequested)
                {
                    System.Console.WriteLine($"  --> [{DateTime.Now}] action executed [token:{local_cts.Token.GetHashCode()}]");
                }
            });
        }
    }
 
}

class Program
{    

    static void Main(string[] args)
    {
        var test = new DebounceTest();

        //test.NotWorking_DebounceTest();
        test.Working_DebounceTest();

    }

}
