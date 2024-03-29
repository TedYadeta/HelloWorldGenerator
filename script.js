	let input = document.querySelector('input');
	let p = document.querySelector('p');
	
	input.addEventListener('change', changeLang);
	
	function changeLang() {
		var choice = input.value;
		var choiceInLowerCase = choice.toLowerCase();
		
		if(choiceInLowerCase == 'ada') {
			p.textContent = "with Ada.Text_IO;\n\nprocedure Hello is\nbegin\n\tAda.Text_IO.Put_Line(\"Hello, World!\");\nend Hello;";
		
		} else if(choiceInLowerCase == 'applescript') {
			p.textContent = "display dialog \"Hello, World!\"";
		
		} else if(choiceInLowerCase == 'basic') {
			p.textContent = "10 PRINT \"Hello, World!\"\n20 END";
			
		} else if(choiceInLowerCase == 'bash') {
			p.textContent = "echo \"Hello, World!\"";
			
		} else if(choiceInLowerCase == 'batch') {
			p.textContent = "ECHO Hello, World!\nPAUSE";
			
		} else if(choiceInLowerCase == 'brainfuck') {
			p.textContent = '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.';
		
		} else if(choiceInLowerCase == 'css') {
			p.textContent = 'I\'m terribly sorry, but CSS is a style language. I don\'t really have anything to show you...';
		
		} else if(choiceInLowerCase == 'c') {
			p.textContent = '#include<stdio.h>\nint main(void) {\n\tprintf("Hello, World!");\n\treturn 0;\n}';
			
		} else if(choiceInLowerCase == 'cobol') {
			p.textContent = "IDENTIFICATION DIVISION.\nPROGRAM-ID. hello-world.\nPROCEDURE DIVISION.\n\tDISPLAY \"Hello, World!\"\n\t.";
			
		} else if(choiceInLowerCase == 'c++') {
			p.textContent = '#include <iostream>\nint main()\n{\n\tstd::cout << "Hello, World!" << std::endl;\n\treturn 0;\n}';
		
		} else if(choiceInLowerCase == 'c#') {
			p.textContent = "Console.WriteLine(\"Hello, World!\")";
			
		} else if(choiceInLowerCase == 'd') {
			p.textContent = "import std.stdio;\n\nvoid main() {\n\twriteln(\"Hello, World!\");\n}";
			
		} else if(choiceInLowerCase == 'fortran') {
			p.textContent = "program helloworld\n\tprint *, \"Hello, World!\"\nend program helloworld";
			
		} else if(choiceInLowerCase == 'go') {
			p.textContent = "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello, World!\")\n}";
			
		} else if(choiceInLowerCase == 'groovy') {
			p.textContent = "print \"Hello World!\n\"";
			
		} else if(choiceInLowerCase == 'haskell') {
			p.textContent = "main = putStrLn \"Hello, World!\"";
		
		} else if(choiceInLowerCase == 'html') {
			p.textContent = "<DOCTYPE html>\n<head>\n\t<title></title>\n\t<body>\n\t\t<p>Hello, World!</p>\n\t</body>\n</html>";
			
		} else if(choiceInLowerCase == 'java') {
			p.textContent = "public class HelloWorld {\n\tpublic static void main(String[] args){\n\t\tSystem.out.print('Hello, World!');\n\t}\n}";
			
		} else if(choiceInLowerCase == 'javascript') {
			p.textContent = "console.log('Hello, World!)";
			
		} else if(choiceInLowerCase == 'julia') {
			p.textContent = "'Hello, World!'";
			
		} else if(choiceInLowerCase == 'kotlin') {
			p.textContent = "fun main(args: Array<String>) {\n\tprintln(\"Hello, World!\")\n}";
			
		} else if(choiceInLowerCase == 'ocaml') {
			p.textContent = "print_string \"Hello world!\\n\"";
			
		} else if(choiceInLowerCase == 'pascal') {
			p.textContent = "program HelloWorld;\nbegin\n\twriteln(\"Hello, World!\");\nend.";
			
		} else if(choiceInLowerCase == 'php') {
			p.textContent = "<?php\n\tprint 'Hello, World!';\n?>";
			
		} else if(choiceInLowerCase == 'powershell') {
			p.textContent = "Write-Host 'Hello, World!'";
		
		} else if(choiceInLowerCase == 'python') {
			p.textContent = "print('Hello, World!')";
			
		} else if(choiceInLowerCase == 'ruby') {
			p.textContent = "puts 'Hello, World!'";
			
		} else if(choiceInLowerCase == 'snobol') {
			p.textContent = "\tOUTPUT = \"Hello, World!\"\nEND";
			
		} else if(choiceInLowerCase == 'swift') {
			p.textContent = "import Swift\nprint(\"Hello, World!\")";
			
		} else if(choiceInLowerCase == 'vbscript') {
			p.textContent = "Sub Main()\n\tMsgBox(\"Hello, World!\")\nEnd Sub";

		} else if(choiceInLowerCase == 'vimscript') {
			p.textContent = "echo: Hello, World!";

		} else if(choiceInLowerCase == 'latin') {
			p.textContent = "Lingua latina non lingua programmatica est, sed verbis 'Salve, Terram!' laborat.";
		
		} else {
			p.textContent = "Sorry, I don't have anything for that...";
		}

	}
	
