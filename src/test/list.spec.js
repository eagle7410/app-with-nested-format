import Vue from 'vue';
import List from '../componets/list.vue';
import resultData from './assets/nested-result';
import resultRender from './assets/render-result';

function getComponentWithProps (Component, propsData) {
	const Constructor = Vue.extend({
		template: `<div id="frame"><list :items="items"></list></div>`,
		data : function () {
			return {
				items : resultData.result
			}
		},
		components : [List]
	});
	const vm = new Constructor().$mount();
	return vm;
}


describe('List', () => {

	let uls = getComponentWithProps ().$el.getElementsByTagName('ul');

	it('check exists ul', () => {
		expect(Boolean(uls.length)).toEqual(true);
	});

	let ul = uls.item(0);
	let htmlText = (ul.outerHTML).replace(/(\s)+/g,'');

	it('check list render', () => {
		expect(htmlText).toEqual(resultRender);
	});

});
