import { IPlayground } from '@speelpleinwerking.com/protobufs';

/**
 * A playground that has all optional properties set
 */
export const maximumExample: IPlayground = {
    details: {
        canonicalName: 'maximum',
        name: 'Speelpleinwerking Maximum',
        logoUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
        zipCode: 8888,
    },
    generalInformation: {
        pricing: {
            pricePerDay: `De prijs per dag is afhankelijk van dingen. \n\n#Test\n\nPrijs 1 is voor kinderen die bla.\n\n# Prijs 2\n\nVoor kindern die bla.`,
            extraCosts: 'De eerste keer dat je kinderen komen, moet er betaald worden voor bepaalde dingen.\n\n# Verzekering\n\nVerzekering kost 5 euro.\n\n# Koek\n\nWil je een koek, dan kost je dat 1 euro.',
            possibleDiscounts: '# Grote gezinnen\n\n## Tweede kind\n\nHet tweede kind mag aan de halve prijs binnen.\n\n## Derde kind\n\nHet derde kind mag helemaal gratis binnen. Hoe cool is dat?',
            helpWithPayingInformation: 'Heb je moeite om het speelplein te betalen? Neem dan een kijkje op [test](https://example.org). \n\nDe volgende organisaties kunnen je ook helpen: \n\n#Sociaal huis\n\nZij doen zus of zo.',
            howToRequestFiscalCertificate: 'Heb je een fiscaal attest nodig? Stuur dan een mailtje naar [dit adres](mailto:test@example.org]',
            howToRequestHealthInsuranceCertificate: 'Attesten van de mutualiteit kan je binnenbrengen op *maandag* en *dinsdag*, maar niet op **woensdag**.',
        },
        ageGroups: 'We werken met leeftijdsgroepen. De kleuters (van **3 tot 6 jaar**) hebben aparte activiteiten.',
        ageLimits: 'Je kan naar het speelplein komen tot 15 jaar. Maar daarna hoeft het niet te stoppen: we zien je graag terug in de leiding!',
        teenagers: 'Onze tienerwerking is zus en zo.',
        openOrClosed: 'We werken volgens een **open speelaanbod** omdat zus en zo.',
        limit: 'Er is geen limiet op het aantal kinderen per dag.',
        firstTime: 'De eerste keer dat je komt, dien je een [fiche](https://example.org) in te vullen.',
        timetable: '# Voormiddag\n\n## Vooropvang\n\nEr is vooropvang vanaf **7.45**.\n\n## Start activiteiten\n\nOm **8.30** gaan we van start met fantastische activiteiten.\n\n# Namiddag\n\n## Activiteiten\n\nOpnieuw leuke dingen doen.\n\n## Vieruurtje\n\nOm **16u** is er vieruurtje.',
        organizedBy: 'Speelplein Maximum is een initiatief van Speelpleinwerking Maximum vzw. We ontvangen subsidies van stad Huppeldepup.',
    },
    calendar: {
        closedOn: {
            '2022-08-15': 'OLV Hemelvaart',
            '2022-07-21': 'Nationale feestdag',
        },
        programme: '# Week 1\n\nHet speelplein is een dierentuin en we gaan naar zwembad Plons om te zwemmen.\n\n# Week 2\n\nMeer leuke dingen.',
        nextYearDates: 'Volgend jaar zijn we open in de **Paasvakantie** (eerste week) en in de **grote vakantie** (alle weken!).'
    },
    accessibility: {
        whoWelcome: 'Iedereen is welkom, maar we vragen om contact op voorhand op te nemen.',
        whoToContact: 'Neem contact op met:\n\n**Voornaam Achternaam** (begeleider inclusie)\n\n055 55 55 55\n\n[inclusie@example.org](mailto:inclusie@example.org)',
        whatWeDo: 'We voorzien een-op-een-begeleiding van kinderen met extra noden.',
        organisationsWeWorkWith: 'We werken samen met blah en dink.',
    },
    location: [
        {
            description: 'Onze hoofdwerking waar we in de grote vakantie zitten.',
            streetAndNumber: 'Straatlaan 55',
            city: 'Huppeldepup',
            googleMapsParameters: {
                lat: 3.33,
                lon: 5.55,
                zoom: 8,
            },
            howToReach: 'Door de poort op je linkerkant',
            entranceImageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
            floorPlan: 'https://randomuser.me/api/portraits/women/7.jpg',
            zipCode: 8888
        },
        {
            description: 'Gemeentelijke school Huppeldepup: hier zitten we in de paasvakantie.',
            googleMapsParameters: {
                lat: 5.33,
                lon: 3.55,
                zoom: 8,
            },
        },
    ],
    organisationalFoundation: {
        missionVisionText: '# Onze missie\n\nKinderen een leuke vakantie bezorgen.\n\n# Onze visie\n\n# Pijler 1: Openheid\n\nOpen zijn en zo\n\n# Pijler 2: Geen geslotenheid\n\nNiet gesloten zijn en zo.',
        missionVisionUrl: 'https://example.org',
        legalInformation: '# VZW\n\nOndernemingsnummer: 555.55555.55',
        insuranceInformation: '# Ongevallen\n\nNeem contact op met Blah om een formulier in te vullen\n\n# Burgerlijke aansprakelijkheid\n\nZus en zo als je dit en dat doet.',
        rulesText: '# Niet stelen\n\nJe mag niet stelen want daarom.\n\n# Wel liegen\n\nLiegen is ok of zo.',
        rulesUrl: 'https://example.org',
    },
    crew: {
        members: [
            {
                name: 'Persoon X',
                description: 'Voorzitter van de stuurgroep',
                emailAddress: 'test@example.org',
                phoneNumber: '+32 222 22 22',
                photoUrl: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
            },
            {
                name: 'Persoon Y',
                photoUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
            },
            {
                name: 'Persoon Z',
                photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
        ],
        forProspectiveVolunteers: '# Ook vrijwilliger worden?\n\nMeer info bij blah blah.',
    },
    media: {
        pictures: [

        ],
        whereToFindPictures: 'Foto\'s kan je vinden in [deze gesloten Facebookgroep](https://example.org).',
    },
    contact: {
        email: 'info@test.be',
        instagramHandle: 'test',
        facebookUrl: 'https://facebook.com/test',
        postalAddress: 'Straatlaan 55 bus 2\n8888 Gemeente',
        phoneNumber: '+32 477 77 77 77',
    },
};

/**
 * A playground that has all optional properties set with the property name for debugging
 */
export const debugExample: IPlayground = {
    details: {
        canonicalName: 'details-canonical-name',
        name: 'details.name',
        zipCode: 8888,
    },
    generalInformation: {
        pricing: {
            pricePerDay: 'generalInformation.pricing.pricePerDay',
            extraCosts: 'generalInformation.pricing.extraCosts',
            possibleDiscounts: 'generalInformation.pricing.possibleDiscounts',
            helpWithPayingInformation: 'generalInformation.pricing.helpWithPayingInformation',
            howToRequestFiscalCertificate: 'generalInformation.pricing.howToRequestFiscalCertificate',
            howToRequestHealthInsuranceCertificate: 'generalInformation.pricing.howToRequestHealthInsuranceCertificate',
        },
        ageGroups: 'generalInformation.ageGroups',
        ageLimits: 'generalInformation.ageLimits',
        teenagers: 'generalInformation.teenagers',
        openOrClosed: 'generalInformation.openOrClosed',
        limit: 'generalInformation.limit',
        firstTime: 'generalInformation.firstTime',
        timetable: 'generalInformation.timetable',
        organizedBy: 'generalInformation.organizedBy',
    },
    calendar: {
        closedOn: {
            '2022-08-15': 'calendar.closedOn.value',
        },
        programme: 'calendar.programme',
        nextYearDates: 'calendar.nextYearDates'
    },
    accessibility: {
        whoWelcome: 'accessibility.whoWelcome',
        whoToContact: 'accessibility.whoToContact',
        organisationsWeWorkWith: 'accessibility.organisationsWeWorkWith',
    },
    location: [
        {
            description: 'location[0].description',
            streetAndNumber: 'location[0].streetAndNumber',
            city: 'location[0].city',
            googleMapsParameters: {
                lat: 3.33,
                lon: 5.55,
                zoom: 8,
            },
            howToReach: 'location[0].howToReach',
            entranceImageUrl: 'location[0].entranceImageUrl',
            floorPlan: 'location[0].floorPlan',
            zipCode: 1254,
        },
    ],
    organisationalFoundation: {
        missionVisionText: 'organisationalFoundation.missionVisionText',
        missionVisionUrl: 'organisationalFoundation.missionVisionUrl',
        legalInformation: 'organisationalFoundation.legalInformation',
        insuranceInformation: 'organisationalFoundation.insuranceInformation',
        rulesText: 'organisationalFoundation.rulesText',
        rulesUrl: 'organisationalFoundation.rulesUrl',
    },
    crew: {
        members: [
            {
                name: 'crew.members[0].name',
                description: 'crew.members[0].description',
                emailAddress: 'crew.members[0].emailAddress',
                phoneNumber: 'crew.members[0].phoneNumber',
                photoUrl: 'crew.members[0].photoUrl',
            }
        ],
        forProspectiveVolunteers: 'crew.forProspectiveVolunteers',
    },
    media: {
        pictures: [
            {
                caption: 'media.pictures[0].caption',
                url: 'media.pictures[0].url',
            }
        ],
        whereToFindPictures: 'media.whereToFindPictures',
    },
    contact: {
        email: 'contact.email',
        instagramHandle: 'contact.instagramHandle',
        facebookUrl: 'contact.facebookUrl',
        postalAddress: 'contact.postalAddress',
        phoneNumber: 'contact.phoneNumber',
    },
};

/**
 * A playground that only has the bare minimum of properties
 */
export const minimumExample: IPlayground = {
    details: {
        canonicalName: 'minium',
        name: 'Speelpleinwerking Minimum',
        zipCode: 9999,
    },
    generalInformation: {
        pricing: {},
    },
    calendar: {

    },
    accessibility: {

    },
    organisationalFoundation: {

    },
    crew: {

    },
    media: {

    },
    contact: {

    },
};

/**
 * A list of example playgrounds
 */
export const playgrounds: ReadonlyArray<IPlayground> = [ maximumExample, minimumExample, debugExample ];
