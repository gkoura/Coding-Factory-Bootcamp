namespace Input;

/// <summary>
/// Reads 2 integers from std input and prints
/// the sum of them
/// </summary>

class Program
{
    static void Main(string[] args)
    {
        int num1;
        int num2;
        
        Console.WriteLine("Enter two numbers: ");
        num1 = int.Parse(Console.ReadLine()!);
        num2 = int.Parse(Console.ReadLine()!);
        
        Console.WriteLine($"{num1} + {num2} = {num1 + num2}");
    }
}