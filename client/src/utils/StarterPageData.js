const roomData = [
    {
        name: "KITCHEN",
        colors: "#AE6E1C",
        icon: <i class="fas fa-utensils starter-icon"></i>,
        showDropdowns: false,
        dropdowns: [
            {
                name: "CABINETS",
                options: ["Cabinet Doors", "Drawers", "Hinges", "Handles", "Tape Measure", "Leveler", "Nails", "Screws", "Paint", "Stain", "Rollers", "Paint Brushes", "Glue/Adhesive" ],
            },
            {
                name: "FLOORING",
                options: ["Tile/Laminate", "Glue/Adhesive", "Mortar", "Luon Boards", "Leveler", "Screws", "Tape Measure", "Pencil", "Grout", "Applicator", "Tile Spacers", "Rags", "Bucket for water", "Tile Saw", "Exacto Knife"],
            },
            {
                name: "COUNTERTOPS",
                options: ["Countertops", "Glue/Adhesive", "Extra Boards/Shims", "Leveler", "Tape Measure", "End Caps", "Heat Gun", "Table Saw/Circulating Saw", "Miter Bolts"],
            },
            {
                name: "SINK + FAUCET",
                options: ["Sink", "Faucet", "Wrench", "Glue/Adhesive", "Tape Measure", "Hammer"],
            },
            {
                name: "BACKSPLASH",
                options: ["Tiles", "Adhesive", "Fine-Grit Sandpaper", "Rags", "Tape Measure", "Leveler", "Grout", "Applicator for Grout", "Tile Spacers" ],
            },
            {
                name: "DECOR",
                options: [ "Cabinets", "Floooring", "Rugs", "Storage", "Wall Decor", "Seating", "Tables"],
            },
        ],
    },
    {
        name: "BATHROOM",
        colors: "#7A9392", 
        icon: <i class="fas fa-toilet starter-icon"></i>,
        showDropdowns: false,
        dropdowns: [
            {
                name: "TOILET",
                options: ["Toilet", "Toilet Seat", "Plumbing supplies", "Brass toilet bolts", "Caulk", "Flexible water supply", "Plastic shims", "Toilet flange", "Wax ring"],
            },
            {
                name: "SHOWER",
                options: ["Tile", "Tub", "Faucets", "Caulk", "Drywall", "Adhesive", "Showerhead", ""],
            },
            {
                name: "VANITY",
                options: ["Vanity", "Sink", "Cabinet Knobs/Handles", "Faucet", "Nails", "Screws", "Plumbing Supplies", "Lighting"],
            },
            {
                name: "FLOORING",
                options: ["Tile", "Laminate", "Adheisve", "Luan Boards", "Underlayment Boards", "Screws", "Nails", "Grout", "Tile Spacers"],
            },
            {
                name: "DECOR",
                options: ["Shelves", "Soap Dispensers", "Rugs", "Wall Decor", "Shower Curtains", "Toothbrush Holders", 'Hand towels'],
            },
        ],
    },
    {
        name: "LIVING ROOM ",
        colors: "#626366",
        icon: <i class="fas fa-couch starter-icon"></i>,
        showDropdowns: false,
        dropdowns: [
            {
                name: "WALLS",
                options: ["Accent Boards", "Shelves", "TV Mount", "Paint", "Paint Brushes", "Paint Trays", "Paint Roolers", "Blue Tape for trim"],
            },
            {
                name: "PAINT",
                options: ["Paint", "Primer", "Paint Brushes", "Paint Roolers", "Blue Trim Tape", "Paint Trays", "Plastic Sheets to cover furniture", "Ladder", "Extended paint roller"],
            },
            {
                name: "FLOORS",
                options: ["Carpet", "Stain", "Trim", "Nails", "Tools"],
            },
            {
                name: "FURNITURE",
                options: ["Couches", "Coffee Tables", "Lighting", "TV Stand", "Fireplace Decor", "Couch Pillows", "Wall Decor", "Storage"],
            },
            {
                name: "DECOR",
                options: ["Entertainment Chairs", "Tables", "Trays", "Bar", "Bar Stools", "Beverage Cart"],
            },
        ],
    },
    {
        name: "MEDIA ROOM",
        colors: "#c7a477",
        icon: <i class="fas fa-tv starter-icon"></i>,
        showDropdowns: false,
        dropdowns: [
            {
                name: "MAIN WALL",
                options: ["Accent Boards", "Shelves", "TV Mount", "Paint", "Paint Brushes", "Paint Trays", "Paint Roolers", "Blue Tape for trim"],
            },
            {
                name: "FLOORING",
                options: ["Carpet", "Stain", "Trim", "Nails", "Tools"],
            },
            {
                name: "FURNITURE",
                options: ["Couches", "Coffee Tables", "Lighting", "TV Stand", "Fireplace Decor", "Couch Pillows", "Wall Decor", "Storage"],
            },
            {
                name: "T.V.",
                options: ["Wall Mount", "TV Stand", "Screws", "Drill", "Stud Finder"],
            },
            {
                name: "DECOR",
                options: ["Entertainment Chairs", "Tables", "Trays", "Bar", "Bar Stools", "Beverage Cart"],
            },
        ],
    },
];

export default roomData;