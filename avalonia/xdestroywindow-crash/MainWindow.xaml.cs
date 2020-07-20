using Avalonia;
using Avalonia.Controls;
using Avalonia.Interactivity;
using Avalonia.Markup.Xaml;

namespace xdestroywindow_crash
{
    public class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            AvaloniaXamlLoader.Load(this);
        }

        private void newSilkNETClick(object sender, RoutedEventArgs e)
        {
            var options = Silk.NET.Windowing.Common.WindowOptions.Default;
            options.Size = new System.Drawing.Size(640, 480);
            var glWindow = Silk.NET.Windowing.Window.Create(options);
            glWindow.Initialize();
        }

        private void dlgClick(object sender, RoutedEventArgs e)
        {
            var tblk = new TextBlock() { Text = "Close this win to crash on X11" };
            //ToolTip.SetTip(tblk, "SAMPLE");

            var w = new Window() { Width = 320, Height = 200 };
            w.Content = tblk;
            w.ShowDialog(this);
        }
    }
}