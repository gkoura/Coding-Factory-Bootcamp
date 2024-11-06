namespace DataTypes;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine($"int: {sizeof(int)}, Min:{int.MinValue}, Max:{int.MaxValue}");
        Console.WriteLine($"long: {sizeof(long)}, Min:{long.MinValue}, Max:{long.MaxValue}");
        Console.WriteLine($"float: {sizeof(float)}, Min:{float.MinValue}, Max:{float.MaxValue}");
        Console.WriteLine($"double: {sizeof(double)}, Min:{double.MinValue}, Max:{double.MaxValue}");
        Console.WriteLine($"decimal: {sizeof(decimal)}, Min:{decimal.MinValue}, Max:{decimal.MaxValue}");
        Console.WriteLine($"bool: {sizeof(bool)}, Min:{false}, Max:{true}");
    }
}