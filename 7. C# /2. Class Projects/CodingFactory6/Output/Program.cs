using System.Globalization;

namespace Output;

class Program
{
    static void Main(string[] args)
    {
        int num = 10_123_153;
        int num2 = 10_123_154;

        Thread.CurrentThread.CurrentCulture = CultureInfo.GetCultureInfo("en-US");
        
        Console.WriteLine("Num1:" + num);
        Console.WriteLine("Num2:" + num2);
        Console.WriteLine("Num1: {0,6:N2}", num);
        Console.WriteLine($"Num2: {num2,6:N2}");
        
    }
}