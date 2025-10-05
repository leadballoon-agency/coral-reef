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
├── type-19/         ❌ Incomplete (2BR, 71.5 sqm) - Developer has wrong assets
├── type-20/         ⚠️  Missing assets (2BR, 75.0 sqm)
├── type-23/         ⚠️  Missing assets (2BR, 82.5 sqm)
├── type-25/         ⚠️  Missing assets (3BR, 95.0 sqm)
├── type-28/         ⚠️  Missing assets (3BR, 120.0 sqm)
├── type-30/         ⚠️  Missing assets (3BR, 145.0 sqm)
└── type-35/         ⚠️  Missing assets (3BR, 195.0 sqm - Penthouse)
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
  "Type 15": "/unit-types/type-15/floorplan.jpg"
  // Type 19 and others: missing correct assets
};
```

## Known Issues

### Type 19 Problems
- **Floor Plan**: Page 109 shows Type 16 (84.7 sqm) instead of Type 19 (71.5 sqm)
- **3D Tour**: Shows 1BR unit instead of 2BR
- **Action**: Contact Copacabana developer for correct assets

## Asset Sources

- **Floor Plans**: Copacabana Sales Kit PDF (SALELKITS-20250601-TPK-HQ-FOR-PRINT)
- **3D Tours**: Matterport virtual tours hosted by Copacabana
- **Specifications**: Official Copacabana Coral Reef website

Last Updated: 2025-10-05
