let text = '<ul>\n' +
	'  <li>Одежда\n' +
	'    <ul>\n' +
	'      <li>Мужская\n' +
	'        <ul>\n' +
	'          <li>Костюмы\n' +
	'            <ul>\n' +
	'              <li>Брюки</li>\n' +
	'              <li>Жакеты</li>\n' +
	'            </ul>\n' +
	'          </li>\n' +
	'        </ul>\n' +
	'      </li>\n' +
	'      <li>Женская\n' +
	'        <ul>\n' +
	'          <li>Платья\n' +
	'            <ul>\n' +
	'              <li>Вечерние</li>\n' +
	'              <li>Летние</li>\n' +
	'            </ul>\n' +
	'          </li>\n' +
	'          <li>Юбки</li>\n' +
	'          <li>Блузы</li>\n' +
	'        </ul>\n' +
	'      </li>\n' +
	'    </ul>\n' +
	'  </li>\n' +
	'</ul>'

text = text.replace(/(\s)+/g, '');

export default text;
