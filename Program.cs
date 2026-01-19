using System;

namespace AddTwoNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Add Two Numbers");
            Console.WriteLine("===============");
            
            // Get first number
            Console.Write("Enter first number: ");
            string? firstInput = Console.ReadLine();
            
            // Get second number
            Console.Write("Enter second number: ");
            string? secondInput = Console.ReadLine();
            
            // Parse and validate inputs
            if (double.TryParse(firstInput, out double firstNumber) && 
                double.TryParse(secondInput, out double secondNumber))
            {
                // Calculate sum
                double sum = firstNumber + secondNumber;
                
                // Display result
                Console.WriteLine($"\nResult: {firstNumber} + {secondNumber} = {sum}");
            }
            else
            {
                Console.WriteLine("\nError: Invalid input. Please enter valid numbers.");
            }
            
            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}
