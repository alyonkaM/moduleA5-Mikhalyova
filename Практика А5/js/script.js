const var1Skip = $('.skip1');
const var2Skip = $('.skip2');
const var3Skip = $('.skip3');
const var4Skip = $('.skip4');
const var5Skip = $('.skip5');
const var6Skip = $('.skip6');
const speachSkip = $('.skip7');

const btnCreate = $('.create');
const btnChange = $('.change');

const showText = $('.text');

const initialObj = {
	"text":["Жили-были {var1} да {var2}. ",
	"Была у них {var3}. ",
	"Снесла {var3} {var4}, не простое - золотое",
	"- {var1} бил, бил - не разбил",
	"- {var2} била, била - не разбила",
	"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
	"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
	"{speach}"
]}

btnCreate.click(function() {
	showText.html(initialObj.text);
});

btnChange.click(function() {
	const var1 = var1Skip.val();
	const var2 = var2Skip.val();
	const var3 = var3Skip.val();
	const var4 = var4Skip.val();
	const var5 = var5Skip.val();
	const var6 = var6Skip.val();
	const speach = speachSkip.val();

	const createdObj = {
		"text":[
	      `Жили-были ${var1} да ${var2}`,
	      `Была у них ${var3}`,
	      `Снесла ${var3} ${var4}, не простое - золотое`,
	      `- ${var1} бил, бил - не разбил`,
	      `- ${var2} била, била - не разбила`,
	      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
	      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
	      `${speach}`,
	    ]
	};

showText.html(createdObj.text)
});