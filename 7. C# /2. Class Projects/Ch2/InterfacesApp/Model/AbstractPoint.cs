namespace InterfacesApp.Model;

internal abstract class AbstractPoint: IMoveable

{
    public int X { get; set; }

    public void Move10()
    {
        throw new NotImplementedException();
    }
}