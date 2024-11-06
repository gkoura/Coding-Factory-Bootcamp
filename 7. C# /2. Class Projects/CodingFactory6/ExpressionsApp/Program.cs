namespace ExpressionsApp;

class Program
{
    static void Main(string[] args)
    {
        int num1 = 10;
        int num2 = 20;
        int num3 = 30;
        int num4 = -40;

        int sum = num1 + num2 + num3 + num4 + num2;
        int mul = num1 * num2 * num3 * num4;
        int div = num1 / num2 * num3 / num4;
        int mod = num1 % num2 * num3 / num4;
        int result1 = num1 % num2 * num3 / num4;
        int result2 = num2 % num2 * num3 / num4;
        int result3 = num2 % num2 * num3 / num4;

        Console.WriteLine($"Sum: {sum}");
        Console.WriteLine($"Mul: {mul}");
        Console.WriteLine($"Div: {div}");
        Console.WriteLine($"Mod: {mod}");
        Console.WriteLine($"Result1: {result1}");
        Console.WriteLine($"Result2: {result2}");
        Console.WriteLine($"Result3: {result3}");
 
        int result4 = Math.Abs(result1);
        Console.WriteLine($"Result4: {result4}");
        
    }
}