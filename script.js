	let input = document.querySelector('input');
	let p = document.querySelector('p');
	
	input.addEventListener('change', changeLang);
	
	function changeLang() {
		let choice = input.value;
		let choiceInLowerCase = choice.toLowerCase();
		
		if(choiceInLowerCase == 'basic') {
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
			
		} else if(choiceInLowerCase == 'c++') {
			p.textContent = '#include <iostream>\nint main()\n{\n\tstd::cout << "Hello, World!" << std::endl;\n\treturn 0;\n}';
		
		} else if(choiceInLowerCase == 'c#') {
			p.textContent = "Console.WriteLine(\"Hello, World!\")";
			
		} else if(choiceInLowerCase == 'go') {
			p.textContent = "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello, World!\")\n}";
		
		} else if(choiceInLowerCase == 'html') {
			p.textContent = "<DOCTYPE html>\n<head>\n\t<title></title>\n\t<body>\n\t\t<p>Hello, World!</p>\n\t</body>\n</html>";
			
		} else if(choiceInLowerCase == 'java') {
			p.textContent = "public class HelloWorld {\n\tpublic static void main(String[] args){\n\t\tSystem.out.print('Hello, World!');\n\t}\n}";
			
		} else if(choiceInLowerCase == 'javascript') {
			p.textContent = "console.log('Hello, World!')";
			
		} else if(choiceInLowerCase == 'php') {
			p.textContent = "<?php\n\tprint 'Hello, World!';\n?>";
		
		} else if(choiceInLowerCase == 'python') {
			p.textContent = "print('Hello, World!')";
			
		} else if(choiceInLowerCase == 'ruby') {
			p.textContent = "puts 'Hello, World!'";
		
		} else {
			p.textContent = "Sorry, I don't have anything for that...";
		}
		
	}
