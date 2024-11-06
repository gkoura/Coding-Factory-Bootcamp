using System.Numerics;

namespace Factorial;

class Program
{
    static void Main(string[] args)
    {
        for (int i = 0; i <= 20; i++)
        {
            Console.WriteLine($"{i}! = {FactoIterative(i),30:N0}");
        }
    }

    public static BigInteger FactoIterative(int n)
    {
        BigInteger result = 1;

        for (int i = 1; i <= n; i++)
        {
            result *= i;
        }

        return result;
    }

    public static BigInteger FactorialRecursively(int n)
    {
        if (n <= 1)
        {
            return 1;
        }
        else
        {
            return n * FactorialRecursively(n - 1);
        }
    }
}