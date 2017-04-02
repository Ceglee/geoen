import {mapComponent} from './map.component';
import {searchComponent} from './search.component';

const root = new Vue({
	el: '#root',
	components: {
		'map-component' : mapComponent,
		'search-component' : searchComponent
	}
});

