using System.ComponentModel;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using Avalonia.Controls;
using Avalonia.Media;
using Avalonia.Threading;

namespace app;

public partial class MainWindow : Window, INotifyPropertyChanged
{

    #region property changed

    public new event PropertyChangedEventHandler? PropertyChanged;

    protected void OnPropertyChanged([CallerMemberName] string? propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }

    #endregion

    #region Value

    private int _Value = 0;
    /// <summary>
    /// Value
    /// </summary>
    public int Value
    {
        get => _Value;
        set
        {
            var changed = value != _Value;
            if (changed)
            {
                _Value = value;
                OnPropertyChanged();
            }
        }
    }

    #endregion

    public MainWindow()
    {
        InitializeComponent();

        this.PointerMoved += (a, b) =>
        {
            this.InvalidateVisual();
        };
    }

    public override void Render(DrawingContext context)
    {
        base.Render(context);

        // NOT WORKING
        // ++Value;

        // WORKING
        Dispatcher.UIThread.Post(() => ++Value);

        Debug.WriteLine($"Value:{Value}");
    }
}