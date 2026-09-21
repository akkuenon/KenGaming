using System;
using System.Collections.Generic;
using System.IO;

var terminal = new Terminal();
terminal.Run();

public sealed class Terminal
{
    private readonly Dictionary<string, Action<string[]>> _commands = new(StringComparer.OrdinalIgnoreCase)
    {
        ["help"] = _ => PrintHelp(),
        ["pwd"] = _ => Console.WriteLine(Environment.CurrentDirectory),
        ["ls"] = args => ListDirectory(args.Length > 0 ? args[0] : "."),
        ["echo"] = args => Console.WriteLine(string.Join(" ", args)),
        ["clear"] = _ => Console.Clear(),
        ["date"] = _ => Console.WriteLine(DateTime.Now.ToString("ddd MMM dd yyyy HH:mm:ss")),
        ["whoami"] = _ => Console.WriteLine(Environment.UserName),
        ["exit"] = _ => throw new OperationCanceledException(),
    };

    public void Run()
    {
        Console.WriteLine("KenGaming C# terminal");
        Console.WriteLine("Type 'help' to see commands.\n");

        while (true)
        {
            try
            {
                Console.Write("kg> ");
                var input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input))
                {
                    continue;
                }

                var parts = input.Split(' ', 2, StringSplitOptions.RemoveEmptyEntries);
                var command = parts[0];
                var args = parts.Length > 1
                    ? parts[1].Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    : Array.Empty<string>();

                if (_commands.TryGetValue(command, out var handler))
                {
                    handler(args);
                }
                else
                {
                    Console.WriteLine($"Unknown command: {command}");
                    Console.WriteLine("Type 'help' to see available commands.");
                }
            }
            catch (OperationCanceledException)
            {
                Console.WriteLine("\nExiting terminal...");
                break;
            }
        }
    }

    private static void PrintHelp()
    {
        Console.WriteLine("Available commands:");
        Console.WriteLine("  help      Show available commands");
        Console.WriteLine("  pwd       Show current working directory");
        Console.WriteLine("  ls [path] List files and folders");
        Console.WriteLine("  echo text Print text to the terminal");
        Console.WriteLine("  clear     Clear the screen");
        Console.WriteLine("  date      Show the current date/time");
        Console.WriteLine("  whoami    Show the current user");
        Console.WriteLine("  exit      Exit the terminal");
    }

    private static void ListDirectory(string path)
    {
        try
        {
            var entries = Directory.GetFileSystemEntries(path);
            if (entries.Length == 0)
            {
                Console.WriteLine($"Directory is empty: {path}");
                return;
            }

            foreach (var entry in entries)
            {
                Console.WriteLine(Path.GetFileName(entry));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unable to list '{path}': {ex.Message}");
        }
    }
}
