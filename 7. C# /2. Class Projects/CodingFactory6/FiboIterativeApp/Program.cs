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
                Console.Write(FibonacciIterative(i) + " ");
            }
        }

        static int FibonacciIterative(int n)
        {
            if (n <= 1)
            {
                return n;
            }

            int a = 0, b = 1, c = 0;
            for (int i = 2; i <= n; i++)
            {
                c = a + b;
                a = b;
                b = c;
            }
            return c;
        }
    }
}