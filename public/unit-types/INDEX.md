# Unit Types Index

This folder contains organized data for all Copacabana Coral Reef unit types.

## Folder Structure

Each unit type has its own folder:
```
unit-types/
├── type-3/          ✅ Complete (1BR, 32.1 sqm)
├── type-4/          ✅ Complete (1BR, 34.3 sqm)
├── type-6.1/        ✅ Complete (1BR, 38.6 sqm)
├── type-9/          ✅ Complete (1BR, 38.5 sqm)
├── type-13/         ✅ Complete (1BR, 44.8 sqm)
├── type-14/         ✅ Complete (2BR, 64.9 sqm)
├── type-15/         ✅ Complete (2BR, 67.6 sqm)
├── type-19/         ✅ Complete (1BR+Pool, 71.5 sqm) - Floor plan verified page 112
├── type-20/         ⚠️  Missing floor plan (2BR, 75.0 sqm)
├── type-23/         ⚠️  Missing floor plan (2BR, 85.3 sqm)
├── type-25/         ⚠️  Missing floor plan (2BR+Pool, 91.7 sqm)
├── type-28/         ⚠️  Missing floor plan (2BR+Pool, 109.2 sqm)
├── type-30/         ⚠️  Missing floor plan (3BR, 120.7 sqm)
└── type-35/         ⚠️  Missing floor plan (3BR, 145.9 sqm)
```

## Each Folder Contains

- `README.md` - Specifications and asset status
- `floorplan.jpg` - Floor plan image (if available)
- 3D tour links documented in README

## Usage in Code

Update `App.jsx` to use local floor plans:

```javascript
const floorPlanMapping = {
  "Type 3": "/unit-types/type-3/floorplan.jpg",
  "Type 4": "/unit-types/type-4/floorplan.jpg",
  "Type 6.1": "/unit-types/type-6.1/floorplan.jpg",
  "Type 9": "/unit-types/type-9/floorplan.jpg",
  "Type 13": "/unit-types/type-13/floorplan.jpg",
  "Type 14": "/unit-types/type-14/floorplan.jpg",
  "Type 15": "/unit-types/type-15/floorplan.jpg",
  "Type 19": "/unit-types/type-19/floorplan.jpg"
  // Types 20, 23, 25, 28, 30, 35: floor plans not yet located in sales kit
};
```

## Known Issues

### Missing Floor Plans
The following unit types still need floor plans located and downloaded:
- **Type 20** (75.0 sqm, 2BR)
- **Type 23** (85.3 sqm, 2BR)
- **Type 25** (91.7 sqm, 2BR+Pool)
- **Type 28** (109.2 sqm, 2BR+Pool)
- **Type 30** (120.7 sqm, 3BR)
- **Type 35** (145.9 sqm, 3BR)

Note: Pages 107-122 only contained 4 individual unit types. Most pages show combined unit floor plans.

## Asset Sources

- **Floor Plans**: Copacabana Sales Kit PDF (SALELKITS-20250601-TPK-HQ-FOR-PRINT)
- **3D Tours**: Matterport virtual tours hosted by Copacabana
- **Specifications**: Official Copacabana Coral Reef website

Last Updated: 2025-10-05
