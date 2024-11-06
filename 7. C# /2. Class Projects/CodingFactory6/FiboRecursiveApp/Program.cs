namespace FiboApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the number of terms in the Fibonacci sequence: ");
            int n = int.Parse(Console.ReadLine());

            Console.WriteLine("Fibonacci sequence up to {0} terms:", n);
            CalculateFibonacci(n);
        }

        static void CalculateFibonacci(int n)
        {
            for (int i = 0; i < n; i++)
            {
                Console.Write(FibonacciRecursive(i) + " ");
            }
        }

        static int FibonacciRecursive(int n)
        {
            if (n <= 1)
            {
                return n;
            }
            return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
        }
    }
}