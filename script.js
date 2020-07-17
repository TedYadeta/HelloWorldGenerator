	var input = document.querySelector('input');
	var p = document.querySelector('p');
	
	input.addEventListener('change', changeLang);
	
	function changeLang() {
		var choice = input.value;
		var choiceInLowerCase = choice.toLowerCase();
		
		if(choiceInLowerCase == 'basic') {
			p.textContent = "10 PRINT 'Hello, World!'\n20 END";
			
		} else if(choice == 'brainfuck') {
			p.textContent = '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.';
		
		} else if(choice == 'c') {
			p.textContent = '#include<stdio.h>\nint main(void) {\n\tprintf("Hello, World!");\n\treturn 0;\n}';
		
		} else if(choice == 'c#') {
			p.textContent = "Console.WriteLine('Hello, World!')";
		
		} else if(choiceInLowerCase == 'html') {
			p.textContent = "<DOCTYPE html>\n<head>\n\t<title></title>\n\t<body>\n\t\t<p>Hello, World!</p>\n\t</body>\n</html>";
			
		} else if(choiceInLowerCase == 'java') {
			p.textContent = "public class HelloWorld {\n\tpublic static void main(String[] args){\n\t\tSystem.out.print('Hello, World!');\n\t}\n}";
			
		} else if(choiceInLowerCase == 'javascript') {
			p.textContent = "console.log('Hello, World!)";
		
		} else if(choiceInLowerCase == 'python') {
			p.textContent = "print('Hello, World!')";
		} else {
			p.textContent = "Sorry, I don't have anything for that...";
		}
		
	}
