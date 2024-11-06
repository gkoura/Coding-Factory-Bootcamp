namespace FiboWithArrayApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the number of terms in the Fibonacci sequence: ");
            int n = int.Parse(Console.ReadLine()!);

            Console.WriteLine("Fibonacci sequence up to {0} terms:", n);
            int[] fibonacciSequence = Fibo(n);

            // Print the Fibonacci sequence
            for (int i = 0; i < n; i++)
            {
                Console.Write(fibonacciSequence[i] + " ");
            }
        }

        public static int[] Fibo(int n)
        {
            // Create an array to store the Fibonacci numbers
            int[] arr = new int[n];

                // Handle base cases
                if (n >= 1)
                    arr[0] = 0; // F(0)
                if (n >= 2)
                    arr[1] = 1; // F(1)

            // Calculate Fibonacci numbers for the rest of the terms
            for (int i = 2; i < n; i++)
            {
                arr[i] = arr[i - 1] + arr[i - 2];
            }

            return arr;
        }
    }
}