
(function() {
	if (!VS) {
		return;
	}
	var basic_config = {
		productTypes: {
			acco: {
				text: "Alojamiento",
				value: "acco",
				searchPath: "/es-es/info/accommodation/search-results",
				subTypes: [
					
            {
                category: "cgbandbguesthouse",
                label: "B&B/Guesthouse"
            }
            ,
            {
                category: "cgcaravancamping",
                label: "Caravan & Camping"
            }
            ,
            {
                category: "cgexclusiveuse",
                label: "Exclusive Use"
            }
            ,
            {
                category: "cghostels",
                label: "Hostel"
            }
            ,
            {
                category: "cghotel",
                label: "Hotel"
            }
            ,
            {
                category: "cgselfcatering",
                label: "Self Catering"
            }
            ,
            {
                category: "cgunusual",
                label: "Unusual"
            }
            
				]
			},
			todo: {
				text: "Cosas que hacer",
				value: "acti,attr,reta",
				searchPath: "/es-es/info/see-do/search-results"
			},
			even: {
				text: "Eventos y festivales",
				value: "even",
				searchPath: "/es-es/info/events/search-results"
			},
			cate: {
				name: "fac_id",
				text: "Gastronomía",
				value: "cate",
				searchPath: "/es-es/info/food-drink/search-results",
				subTypes: [
					
						{
							id: "modbrit",
							label: "British"
						}
						,
						{
							id: "vege",
							label: "Vegetarian/Vegan"
						}
						,
						{
							id: "othercuis",
							label: "Other Cuisines"
						}
						,
						{
							id: "fishseafd",
							label: "Fish & Seafood"
						}
						,
						{
							id: "italian",
							label: "Italian"
						}
						,
						{
							id: "scottish",
							label: "Scottish"
						}
						,
						{
							id: "french",
							label: "French"
						}
						,
						{
							id: "indian",
							label: "Indian"
						}
						
				]
			},
			tour: {
				text: "Excursiones",
				value: "tour",
				searchPath: "/es-es/info/tours/search-results"
			}
		},
		URLpaths: {
			siteUrl: "https://www.visitscotland.com",
			searchAccommodation: "/es-es/info/accommodation/search-results",
			searchEvents: "/es-es/info/events/search-results",
			searchSeeDo: "/es-es/info/see-do/search-results",
			searchFood_drink: "/es-es/info/food-drink/search-results",
			searchServices: "/es-es/info/services/search-results",
			searchTransport: "/es-es/info/transport/search-results",
			searchTownsVillages: "/es-es/info/towns-villages/search-results",
			searchShopping: "/es-es/info/see-do/search-results",
			searchTours: "/es-es/info/tours-guides/search-results",
			searchTMSApi: "/tms-api/v1",
			intTravelDeals: "/es-es/"
		},
		/*
			Defines default location IDs for URL paths with the matching path fragment, used by search component
		 */
		pathDefaultLocations: {
		    '/aberdeen/': '21',
			'/arran/': 'isle-of-arran',
            '/aviemore/': '7231',
            '/ayr-p242821': '2921',
            '/dumfries/': '3221',
            '/dundee/': '3721',
            '/edinburgh/': '4161',
            '/fort-william/': '7461',
            '/glasgow/': '4751',
            '/glencoe/': '7621',
            '/highlands/': 'highlands',
            '/inverness/': '7771',
            '/isle-islay/': 'isle-of-islay',
            '/isle-jura/': 'isle-of-jura',
            '/isle-mull/': 'isle-of-mull',
            '/kirkwall/': '5561',
            '/lerwick/': '7041',
            '/lewis-harris-stornoway/': 'outer-hebrides',
            '/loch-lomond/': '941',
            '/loch-ness/': '7881',
            '/oban/': '1751',
            '/orkney/': 'orkney',
            '/peebles/': '10441',
            '/perth/': '6881',
            '/pitlochry/': '6981',
            '/shetland/': 'shetland',
            '/isle-skye/': 'isle-of-skye',
            '/st-andrews/': '9911',
            '/stirling/': '2001'
        },
		search_module: {
			for: "para",
			in: "en",
			on: "on",
			from: "Desde",
			reset: "Borrar",
			location: "Localidad",
			location_placeholder: 'Introduzca una localización ',
			read_more: "Leer más",
			tours_available: "TOURS DISPONIBLES",
			tour_keywords: "Estoy buscando",
			tour_keywords_placeholder: "Palabras clave",
			tour_month: "Viajaré en",
			tour_month_placeholder: "Seleccione un mes",
			tour_origin: "Lugar de inicio",
			tour_origin_placeholder: "Ubicación",
			checkbox_label_unchecked: "Recuadro sin marcar",
			checkbox_label_checked: "Recuadro marcado",
			more_options: "Más opciones",
			fewer_options: "Menos opciones",
			search_for: "Buscar",
			find: "Encontrar",
			any_type: "Cualquier tipo",
			select_type: "Seleccionar el tipo de búsqueda",
			cuisine: "Tipo de cocina",
			cuisine_award: "Mostrar únicamente negocios que hayan recibido el premio Taste our Best",
			keywords: "Palabras clave",
			search: "Búsqueda",
			awards: "Premios",
			visit_website: "Visitar página web",
			available_on: "está disponible el",
			guests_rooms: {
				room: "Habitación",
				rooms: "Habitaciones",
				unit: "Unidad", 
				units: "Unidades",
				title: "Habitación",
				add_room_label: "Añadir una habitación",
				add_unit_label: "Añadir unidad",
				adults: "Adultos",
				guest: "Persona",
				guests: "Personas",
				back_to_results: "Volver a los resultados",
				book_now: "Reservar ahora",
				check_availability: "Comprobar disponibilidad",
				children: "Niños (2+)",
				infants: "Niños (0-2)",
				close: "Cerrar",
				refine_availability: "Precisar disponibilidad",
				remove: "Eliminar",
				requirements: "La primera unidad requiere al menos un adulto",
				search: "Búsqueda",
				search_again: "Volver a buscar",
				tc: "Términos y condiciones",
				visit_website: "Visitar página web",
				with: "con",
				disclaimer: "Por favor contacte directamente con el proveedor si quiere reservar 5 o más habitaciones.",
				save_changes: "Guardar cambios"
			},
			dates: {
				nights: "Noches",
				night: "noche",
				checkin: "Entrada",
				checkout: "Salida",
				date_label: "Fechas",
				startdate: "Fecha de inicio",
				enddate: "Fecha de finalización"
			},
			months: [
				{ label: "Enero", value: "january" },
				{ label: "Febrero", value: "february" },
				{ label: "Marzo", value: "march" },
				{ label: "Abril", value: "april" },
				{ label: "Mayo", value: "may" },
				{ label: "Junio", value: "june" },
				{ label: "Julio", value: "july" },
				{ label: "Agosto", value: "august" },
				{ label: "Septiembre", value: "september" },
				{ label: "Octubre", value: "october" },
				{ label: "Noviembre", value: "november" },
				{ label: "Diciembre", value: "december" }
			]
		}
	};

	
		var search_config = {};
	

	VS.search_config = {
		data: search_config,
		basic_config: basic_config
	};
})();
