namespace ArgsApp;

class Program
{
    static void Main(string[] args)
    {
        if (args.Length != 3)
        {
            Console.WriteLine("Error: Usage: dotner run <arg0> <arg1> <arg2>");
            Environment.Exit(1);
        }

        Console.WriteLine($"{args[0]} {args[1]} {args[2]}");
    }
}