const rooms = {
    "living-room": [
        {
            name: "Sofa",
            variations: [
                { name: "Maža Sofa", volume: 1.0, weight: 60, dimensions: { length: 2, width: 0.8, height: 0.8 } },
                { name: "Vidutinė Sofa", volume: 1.2, weight: 80, dimensions: { length: 2.2, width: 0.9, height: 0.8 } },
                { name: "Didelė Sofa", volume: 1.5, weight: 100, dimensions: { length: 2.5, width: 1, height: 0.8 } }
            ]
        },
        {
            name: "Televizorius",
            variations: [
                { name: "Mažas Televizorius", volume: 0.1, weight: 10, dimensions: { length: 0.5, width: 0.3, height: 0.1 } },
                { name: "Vidutinis Televizorius", volume: 0.2, weight: 20, dimensions: { length: 0.6, width: 0.4, height: 0.2 } },
                { name: "Didelis Televizorius", volume: 0.3, weight: 30, dimensions: { length: 0.8, width: 0.5, height: 0.3 } }
            ]
        },
        {
            name: "Kavos stalas",
            variations: [
                { name: "Mažas Kavos stalas", volume: 0.5, weight: 15, dimensions: { length: 0.8, width: 0.6, height: 0.4 } },
                { name: "Vidutinis Kavos stalas", volume: 0.7, weight: 20, dimensions: { length: 1.0, width: 0.7, height: 0.5 } },
                { name: "Didelis Kavos stalas", volume: 1.0, weight: 30, dimensions: { length: 1.2, width: 0.8, height: 0.6 } }
            ]
        },
        {
            name: "Šviestuvas",
            variations: [
                { name: "Mažas Šviestuvas", volume: 0.1, weight: 5, dimensions: { length: 0.2, width: 0.1, height: 0.1 } },
                { name: "Vidutinis Šviestuvas", volume: 0.2, weight: 8, dimensions: { length: 0.3, width: 0.2, height: 0.2 } },
                { name: "Didelis Šviestuvas", volume: 0.3, weight: 12, dimensions: { length: 0.4, width: 0.3, height: 0.3 } }
            ]
        }

    ],
    "kitchen": [
        {
            name: "Šaldytuvas",
            variations: [
                { name: "Mažas Šaldytuvas", volume: 0.8, weight: 40, dimensions: { length: 1.0, width: 0.6, height: 1.5 } },
                { name: "Vidutinis Šaldytuvas", volume: 1.0, weight: 60, dimensions: { length: 1.2, width: 0.8, height: 1.7 } },
                { name: "Didelis Šaldytuvas", volume: 1.3, weight: 80, dimensions: { length: 1.5, width: 1.0, height: 1.9 } }
            ]
        },
        {
            name: "Viryklė",
            variations: [
                { name: "Maža Viryklė", volume: 0.5, weight: 20, dimensions: { length: 0.6, width: 0.4, height: 0.1 } },
                { name: "Vidutinė Viryklė", volume: 0.7, weight: 30, dimensions: { length: 0.8, width: 0.6, height: 0.1 } },
                { name: "Didelė Viryklė", volume: 1.0, weight: 40, dimensions: { length: 1.0, width: 0.8, height: 0.1 } }
            ]
        },
        {
            name: "Indaplovė",
            variations: [
                { name: "Maža Indaplovė", volume: 0.6, weight: 30, dimensions: { length: 0.8, width: 0.5, height: 0.6 } },
                { name: "Vidutinė Indaplovė", volume: 0.8, weight: 40, dimensions: { length: 1.0, width: 0.6, height: 0.7 } },
                { name: "Didelė Indaplovė", volume: 1.0, weight: 50, dimensions: { length: 1.2, width: 0.7, height: 0.8 } }
            ]
        },
        {
            name: "Valgomasis stalas",
            variations: [
                { name: "Mažas Valgomasis stalas", volume: 0.8, weight: 30, dimensions: { length: 1.0, width: 0.8, height: 0.7 } },
                { name: "Vidutinis Valgomasis stalas", volume: 1.0, weight: 40, dimensions: { length: 1.2, width: 1.0, height: 0.8 } },
                { name: "Didelis Valgomasis stalas", volume: 1.2, weight: 50, dimensions: { length: 1.5, width: 1.2, height: 0.8 } }
            ]
        }

    ],
    "bedroom": [
        {
            name: "Lova",
            variations: [
                { name: "Vienvietė Lova", volume: 1.5, weight: 70, dimensions: { length: 2.0, width: 0.9, height: 0.6 } },
                {
                    name: "Dvivietė Lova", volume: 2.0, weight: 100, dimensions: {
                        length: 2.2, width: 1.4, height:

                            0.6
                    }
                },
                { name: "Didžioji Lova", volume: 2.5, weight: 130, dimensions: { length: 2.5, width: 1.8, height: 0.6 } }
            ]
        },
        {
            name: "Spintelė",
            variations: [
                { name: "Maža Spintelė", volume: 0.5, weight: 15, dimensions: { length: 0.8, width: 0.4, height: 1.2 } },
                { name: "Vidutinė Spintelė", volume: 0.7, weight: 20, dimensions: { length: 1.0, width: 0.5, height: 1.4 } },
                { name: "Didelė Spintelė", volume: 1.0, weight: 30, dimensions: { length: 1.2, width: 0.6, height: 1.6 } }
            ]
        },
        {
            name: "Stalčius",
            variations: [
                { name: "Mažas Stalčius", volume: 0.3, weight: 10, dimensions: { length: 0.5, width: 0.4, height: 0.8 } },
                { name: "Vidutinis Stalčius", volume: 0.5, weight: 15, dimensions: { length: 0.7, width: 0.6, height: 1.0 } },
                { name: "Didelis Stalčius", volume: 0.7, weight: 20, dimensions: { length: 1.0, width: 0.8, height: 1.2 } }
            ]
        },
        {
            name: "Šviestuvas",
            variations: [
                { name: "Mažas Šviestuvas", volume: 0.1, weight: 5, dimensions: { length: 0.2, width: 0.2, height: 0.2 } },
                { name: "Vidutinis Šviestuvas", volume: 0.2, weight: 8, dimensions: { length: 0.3, width: 0.3, height: 0.3 } },
                { name: "Didelis Šviestuvas", volume: 0.3, weight: 12, dimensions: { length: 0.4, width: 0.4, height: 0.4 } }
            ]
        }

    ],
    "bathroom": [
        {
            name: "Vonia",
            variations: [
                { name: "Maža vonia", volume: 1.0, weight: 50, dimensions: { length: 1.2, width: 0.8, height: 0.6 } },
                { name: "Vidutinė vonia", volume: 1.5, weight: 70, dimensions: { length: 1.4, width: 0.9, height: 0.7 } },
                { name: "Didelė vonia", volume: 2.0, weight: 90, dimensions: { length: 1.6, width: 1.0, height: 0.8 } }
            ]
        },
        {
            name: "Pakabinama spintelė",
            variations: [
                { name: "Maža Pakabinama spintelė", volume: 0.3, weight: 10, dimensions: { length: 0.4, width: 0.3, height: 0.8 } },
                { name: "Vidutinė Pakabinama spintelė", volume: 0.5, weight: 15, dimensions: { length: 0.6, width: 0.4, height: 1.0 } },
                { name: "Didelė Pakabinama spintelė", volume: 0.7, weight: 20, dimensions: { length: 0.8, width: 0.5, height: 1.2 } }
            ]
        },
        {
            name: "Veidrodėlis",
            variations: [
                { name: "Mažas Veidrodėlis", volume: 0.2, weight: 5, dimensions: { length: 0.3, width: 0.2, height: 0.1 } },
                { name: "Vidutinis Veidrodėlis", volume: 0.3, weight: 8, dimensions: { length: 0.4, width: 0.3, height: 0.2 } },
                { name: "Didelis Veidrodėlis", volume: 0.4, weight: 10, dimensions: { length: 0.5, width: 0.4, height: 0.3 } }
            ]
        },
        {
            name: "Dušo kabinos stalčius",
            variations: [
                { name: "Mažas Dušo kabinos stalčius", volume: 0.3, weight: 5, dimensions: { length: 0.4, width: 0.3, height: 0.8 } },
                { name: "Vidutinis Dušo kabinos stalčius", volume: 0.4, weight: 7, dimensions: { length: 0.6, width: 0.4, height: 1.0 } },
                { name: "Didelis Dušo kabinos stalčius", volume: 0.5, weight: 10, dimensions: { length: 0.8, width: 0.5, height: 1.2 } }
            ]
        }

    ],
    "corridor": [
        {
            name: "Pakabinimas Stendas",
            variations: [
                { name: "Mažas Pakabinamas Stendas", volume: 0.1, weight: 5, dimensions: { length: 0.2, width: 0.2, height: 0.5 } },
                { name: "Vidutinis Pakabinamas Stendas", volume: 0.2, weight: 10, dimensions: { length: 0.3, width: 0.3, height: 0.7 } },
                { name: "Didelis Pakabinamas Stendas", volume: 0.3, weight: 15, dimensions: { length: 0.4, width: 0.4, height: 1.0 } }
            ]
        },
        {
            name: "Spinta",
            variations: [
                {
                    name: "Maža Spinta", volume: 0.5, weight: 20,

                    dimensions: { length: 0.8, width: 0.4, height: 1.5 }
                },
                { name: "Vidutinė Spinta", volume: 0.7, weight: 30, dimensions: { length: 1.0, width: 0.6, height: 1.8 } },
                { name: "Didelė Spinta", volume: 1.0, weight: 40, dimensions: { length: 1.2, width: 0.8, height: 2.0 } }
            ]
        },
        {
            name: "Laiptai",
            variations: [
                { name: "Maži Laiptai", volume: 0.3, weight: 10, dimensions: { length: 0.6, width: 0.4, height: 1.0 } },
                { name: "Vidutiniai Laiptai", volume: 0.5, weight: 15, dimensions: { length: 0.8, width: 0.6, height: 1.2 } },
                { name: "Dideli Laiptai", volume: 0.7, weight: 20, dimensions: { length: 1.0, width: 0.8, height: 1.4 } }
            ]
        },
        {
            name: "Kilimas",
            variations: [
                { name: "Mažas Kilimas", volume: 0.4, weight: 5, dimensions: { length: 0.5, width: 0.3, height: 0.05 } },
                { name: "Vidutinis Kilimas", volume: 0.6, weight: 8, dimensions: { length: 0.7, width: 0.4, height: 0.05 } },
                { name: "Didelis Kilimas", volume: 0.8, weight: 12, dimensions: { length: 0.9, width: 0.5, height: 0.05 } }
            ]
        }

    ],
    "garage": [
        {
            name: "Dviratis",
            variations: [
                { name: "Vaikiškas Dviratis", volume: 0.6, weight: 10, dimensions: { length: 1.2, width: 0.5, height: 0.8 } },
                { name: "Vidutinis Dviratis", volume: 1.0, weight: 15, dimensions: { length: 1.4, width: 0.6, height: 1.0 } },
                { name: "Didelis Dviratis", volume: 1.4, weight: 20, dimensions: { length: 1.6, width: 0.7, height: 1.2 } }
            ]
        },
        {
            name: "Automobilio rėmas",
            variations: [
                { name: "Mažas Automobilio rėmas", volume: 1.0, weight: 150, dimensions: { length: 2.5, width: 1.2, height: 1.0 } },
                {
                    name: "Vidutinis Automobilio rėmas", volume: 1.2, weight: 200, dimensions: {
                        length: 3.0, width

                            : 1.5, height: 1.2
                    }
                },
                { name: "Didelis Automobilio rėmas", volume: 1.5, weight: 250, dimensions: { length: 3.5, width: 1.8, height: 1.5 } }
            ]
        },
        {
            name: "Stalas su įrankiais",
            variations: [
                { name: "Mažas Stalas su įrankiais", volume: 0.5, weight: 30, dimensions: { length: 1.0, width: 0.5, height: 0.8 } },
                { name: "Vidutinis Stalas su įrankiais", volume: 0.7, weight: 40, dimensions: { length: 1.2, width: 0.6, height: 1.0 } },
                { name: "Didelis Stalas su įrankiais", volume: 1.0, weight: 50, dimensions: { length: 1.5, width: 0.8, height: 1.2 } }
            ]
        }

    ]
};