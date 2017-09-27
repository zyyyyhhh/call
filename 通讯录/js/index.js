/*
* @Author: dell
* @Date:   2017-09-27 18:28:50
* @Last Modified by:   dell
* @Last Modified time: 2017-09-27 19:31:19
*/
window.addEventListener('load', function(){

	let dl = document.querySelector('dl');
	let info = [
		{name:'张丹颖',tell:18435108518,py:'zhangdanying'},
		{name:'许壮壮',tell:18435108512,py:'xuzhuangzhuang'},
		{name:'王莎',tell:18435108519,py:'wangsha'},
		{name:'曹瑞芳',tell:18435108525,py:'caoruifang'},
		{name:'胡梅',tell:18435108536,py:'humei'},
		{name:'冯好好',tell:18435108253,py:'fenghaohao'},
		{name:'大胖',tell:18435108547,py:'dapang'},
		{name:'慧姐',tell:18435108569,py:'huijie'},
		{name:'冯好好',tell:18435108253,py:'fenghaohao'},
		{name:'大胖',tell:18435108547,py:'dapang'},
		{name:'慧姐',tell:18435108569,py:'huijie'}
	]

	render(info);
	function render(data){
		dl.innerHTML = '';
		let obj = {};
		data.forEach(function(element){
			let first = element.py.charAt(0).toUpperCase();
			if(!obj[first]){
				obj[first] = [];
			}
			obj[first].push(element);
		})

		let char = Object.keys(obj).sort();
			char.forEach(element=>{
				dl.innerHTML+=`
					<dt>${element}</dt>
				`	
				obj[element].forEach(value=>{
					dl.innerHTML+=`
						<dd><a href="tel:${value.tell}">${value.name}</a></dd>
					`
			})
		})
	}
})