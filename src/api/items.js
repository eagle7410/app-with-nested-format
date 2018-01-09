import data from '../test/assets/data'

const get = () => new Promise((ok, bad) => {
	try {
		ok(data);
	} catch (e) {
		bad(e);
	}
});

export default {
	get : get
};
