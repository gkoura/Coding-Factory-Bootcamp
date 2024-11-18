namespace InterfacesApp.Model;

public interface IMoveable
{
    void Move10();

    void Move15()
    {
        Console.WriteLine("Move 15 units");
    }
}