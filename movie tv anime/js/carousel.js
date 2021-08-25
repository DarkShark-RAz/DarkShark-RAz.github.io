window.addEventListener( 'load',  ()=> {
	new Splide( '.splide', {
        type:'loop',
		rewind: true,
        gap:5,
        perPage: 5,
        breakpoints: {
            1200: {
                perPage: 4,
            },
            900: {
                perPage: 3,
            },
            700: {
                perPage: 2,
            },
            400:{
                perPage:1,
            }
        },
	} ).mount();
    new Splide('#sec',{
        type:'loop',
		rewind: true,
        gap:5,
        perPage: 5,
        breakpoints: {
            1200: {
                perPage: 4,
            },
            900: {
                perPage: 3,
            },
            700: {
                perPage: 2,
            },
            400:{
                perPage:1,
            }
        },
	} ).mount();
    new Splide('#ter',{
        type:'loop',
		rewind: true,
        gap:5,
        perPage: 10,
        // heightRatio: 0.1,
        breakpoints: {
            1200: {
                perPage: 6,
            },
            900: {
                perPage: 5,
            },
            700: {
                perPage: 4,
            },
            400:{
                perPage:3,
            }
        },
	} ).mount();

} );