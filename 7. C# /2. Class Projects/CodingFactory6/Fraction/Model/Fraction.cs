namespace Fraction.Model;

internal class Fraction
{
    private int _numerator;
    private int _denominator;

    public int Numerator
    {
        get => _numerator;
        set => _numerator = value;
    }

    public int Denominator
    {
        get => _denominator;
        set
        {
            if (value == 0) throw new ArgumentException("Denominator must not be zero");
            _denominator = value;
        }
    }

    public Fraction(int numerator, int denominator)
    {
        if (denominator == 0) throw new ArgumentException("Denominator must not be zero");

        _numerator = numerator;
        _denominator = denominator;
        Simplify(); // Automatically simplify the fraction upon creation
    }

    // Operator Overloads
    public static Fraction operator +(Fraction a) => a;

    public static Fraction operator -(Fraction a) => new Fraction(-a.Numerator, a.Denominator);

    public static Fraction operator +(Fraction a, Fraction b)
    {
        return new Fraction(
            a.Numerator * b.Denominator + b.Numerator * a.Denominator, // New numerator
            a.Denominator * b.Denominator                              // New denominator
        );
    }

    public static Fraction operator -(Fraction a, Fraction b) => a + (-b);

    public static Fraction operator *(Fraction a, Fraction b) =>
        new Fraction(a.Numerator * b.Numerator, a.Denominator * b.Denominator);

    public static Fraction operator /(Fraction a, Fraction b)
    {
        if (b.Numerator == 0) throw new DivideByZeroException("Cannot divide by a fraction with a numerator of zero.");

        return a * new Fraction(b.Denominator, b.Numerator);
    }

    // Override Equals
    public override bool Equals(object obj)
    {
        if (obj is Fraction other)
        {
            // Compare the fractions in their reduced forms
            return _numerator * other.Denominator == _denominator * other.Numerator;
        }
        return false;
    }

    public override int GetHashCode() =>
        (_numerator, _denominator).GetHashCode();

    public override string ToString() =>
        $"{_numerator}/{_denominator}";

    // Utility: Simplify the fraction
    private void Simplify()
    {
        int gcd = GCD(Math.Abs(_numerator), Math.Abs(_denominator));
        _numerator /= gcd;
        _denominator /= gcd;

        // Ensure the denominator is always positive
        if (_denominator < 0)
        {
            _numerator = -_numerator;
            _denominator = -_denominator;
        }
    }

    // Calculate GCD (Greatest Common Divisor)
    private static int GCD(int a, int b) => b == 0 ? a : GCD(b, a % b);
}
