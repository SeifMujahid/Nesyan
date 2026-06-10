# Nesyan Project - Translation Implementation Guide

## Overview

This guide describes the complete translation implementation for the Nesyan Alzheimer's Care Platform. The project now supports both English and Arabic languages with a comprehensive set of translation keys covering all user-facing text.

## Project Structure

### Translation Files Location

```
src/assets/i18n/
├── en.json          # English translations
└── ar.json          # Arabic translations
```

## Translation Keys Organization

### 1. **NAV** - Navigation Elements

- `TOGGLE_LANG`: Language toggle button
- `LOGOUT`: Logout button
- `PROFILE`: Profile link
- `USER_MENU`: User menu label

### 2. **LANDING** - Landing Page

- `TITLE`: Platform title
- `SUBTITLE`: Platform description
- `DESCRIPTION`: Platform details
- `APP_STORE`, `GOOGLE_PLAY`: App store links
- `WHY_CHOOSE`: Features section title
- `STAGE_BASED`, `SMART_REMINDERS`, `PATIENT_TRACKING`, `COGNITIVE_GAMES`, `MEDICAL_MANAGEMENT`, `COLLABORATIVE_CARE`: Feature titles and descriptions

### 3. **AUTH** - Authentication & Registration

- `LOGIN_TITLE`: Login page title
- `WELCOME_BACK`: Welcome message
- `EMAIL`, `PASSWORD`: Form labels
- `EMAIL_PLACEHOLDER`, `PASSWORD_PLACEHOLDER`: Input placeholders
- `REMEMBER_ME`: Checkbox label
- `CREATE_ACCOUNT`: Registration form title
- `PERSONAL_INFO`: Personal information section
- `FIRST_NAME`, `LAST_NAME`, `USERNAME`, `NATIONAL_ID`, `AGE`, `GENDER`, `COUNTRY`, `CITY`, `PHONE`, `HEIGHT`, `WEIGHT`, `BLOOD_TYPE`: Form field labels

### 4. **PROFILE** - User Profiles

- `PATIENT_PROFILE`, `DOCTOR_PROFILE`, `CAREGIVER_PROFILE`, `RELATIVE_PROFILE`: Profile titles
- Profile field labels (FIRST_NAME, LAST_NAME, EMAIL, PHONE, etc.)
- `NO_DATA`: Default value when data is missing

### 5. **APPOINTMENTS** - Appointment Management

- `TITLE`: "Appointments"
- `SUBTITLE`: Description
- `ADD_APPOINTMENT`: Add button
- `APPOINTMENT_TITLE`, `APPOINTMENT_NAME`, `SPECIALTY`, `LOCATION`, `FREQUENCY`: Form fields
- `ADD_NEW`, `EDIT`: Modal titles

### 6. **REMINDERS** - Reminder Management

- `TITLE`: "Reminders"
- `SUBTITLE`: Description
- `ADD_REMINDER`: Add button
- `HIGH_PRIORITY`, `MEDIUM_PRIORITY`, `LOW_PRIORITY`: Priority levels
- `MEDICATION`, `DOCTOR_APPOINTMENT`, `GAME_TIME`: Reminder types

### 7. **TASKS** - Daily Tasks

- `DAILY_TASKS`: Section title
- `SUBTITLE`: Description
- `ADD_TASK`: Add button
- `BREAKFAST`, `MORNING_WALK`: Sample tasks
- `MARK_DONE`, `MARK_PENDING`: Task status actions

### 8. **MEDICATIONS** - Medication Management

- `TITLE`: "Medications"
- `SUBTITLE`: Description
- `ADD_MEDICATION`: Add button
- `MEDICATION_TITLE`, `MEDICATION_NAME`, `DOSAGE`, `FREQUENCY`: Form fields

### 9. **DOCTOR** - Doctor Profile

- `MY_PROFILE`: Profile title
- `BACK_HOME`: Back button
- `SPECIALTY`, `LICENSE`, `HOSPITAL`, `EXPERIENCE`: Doctor-specific fields

### 10. **FAMILY** - Family Members Management

- `FAMILY_MEMBERS`: Section title
- `SUBTITLE`: Description
- `ADD_MEMBER`: Add button
- `MEMBER_NAME`, `RELATION`, `PHONE`: Form fields

### 11. **MANAGE_PATIENTS** - Patient List Management

- `TITLE`: Page title
- `PATIENT_NAME`, `STAGE`: Patient fields
- `REMOVE`: Delete button

### 12. **TREATMENT** - Treatment Requests

- `TITLE`: "Treatment Requests"
- `SUBTITLE`: Description
- `PENDING`, `APPROVED`, `REJECTED`: Status values
- `ACCEPT`, `REJECT`: Action buttons

### 13. **COMMON** - Common UI Elements

- `YES`, `NO`: Boolean options
- `CANCEL`, `SAVE`, `DELETE`, `EDIT`, `ADD`, `BACK`: Common actions
- `NEXT`, `PREVIOUS`: Navigation
- `SUBMIT`, `CLOSE`: Form actions
- `LOADING`: Loading indicator
- `ERROR`, `SUCCESS`, `WARNING`, `INFO`: Message types
- `SEARCH`, `FILTER`, `SORT`, `EXPORT`, `IMPORT`: Data operations

### 14. **ERRORS** - Error Messages

- `REQUIRED_FIELD`: Field required error
- `INVALID_EMAIL`: Email validation error
- `PASSWORD_MISMATCH`: Password mismatch error
- `SOMETHING_WRONG`: Generic error
- `CONNECTION_ERROR`: Network error
- `UNAUTHORIZED`: Authorization error
- `SERVER_ERROR`: Server error

## Usage in Templates

### Basic Usage

```html
<!-- Simple text translation -->
<h1>{{ 'AUTH.LOGIN_TITLE' | translate }}</h1>

<!-- Button with translation -->
<button>{{ 'COMMON.SAVE' | translate }}</button>

<!-- With placeholder -->
<input [placeholder]="'AUTH.EMAIL_PLACEHOLDER' | translate" />
```

### With Property Binding

```html
<!-- In aria-label -->
<input [attr.aria-label]="'AUTH.EMAIL' | translate" />

<!-- In alt text -->
<img [alt]="'LANDING.TITLE' | translate" />
```

### Conditional Display

```html
<!-- Show different text based on condition -->
<h1 *ngIf="!onEdit">{{ 'APPOINTMENTS.ADD_NEW' | translate }}</h1>
<h1 *ngIf="onEdit">{{ 'APPOINTMENTS.EDIT' | translate }}</h1>
```

## Implementation Status

### Completed Components

✅ landing.component.html
✅ login.component.html
✅ register.component.html
✅ main-nav.component.html
✅ appointments.component.html
✅ reminders.component.html
✅ daily-tasks.component.html
✅ medication.component.html
✅ patient-profile.component.html
✅ doctor-profile.component.html
✅ caregiver-profile.component.html
✅ relative-profile.component.html
✅ family.component.html
✅ manage-patients-list.component.html
✅ treatment-requests.component.html
✅ create-patient-account.component.html

### Remaining Components to Complete

- link-patient-account.component.html
- location.component.html
- request-caregiver.component.html
- reset-password.component.html
- forget-password.component.html
- routine.component.html
- mind-games.component.html
- statistics.component.html
- stage-management.component.html
- request-treatment.component.html
- verifay-account.component.html
- spare-nav.component.html

## Translation Count

- **Total Translation Keys**: 180+
- **English Keys**: 180+ unique keys with English text
- **Arabic Keys**: 180+ unique keys with Arabic translations

## Language Switching

The platform supports automatic language switching through the translation service. The language toggle button in the navigation bar switches between English and Arabic by changing the active language in the translation service.

## Key Features

1. **Comprehensive Coverage**: All user-facing static text is translatable
2. **Organized Structure**: Keys grouped by feature/page for easy maintenance
3. **Consistent Naming**: Uses UPPERCASE with underscores (FEATURE.KEY_NAME)
4. **Bilingual Support**: Full English and Arabic translations
5. **RTL Ready**: Arabic translations support right-to-left text direction

## Adding New Translations

### Steps to Add a New Translation Key

1. Identify the static text in the component HTML
2. Create a translation key following the naming convention
3. Add the English text to `en.json` under the appropriate section
4. Add the Arabic translation to `ar.json` under the same section
5. Replace the hardcoded text in the HTML with the translation pipe

### Example

**Before:**

```html
<button>Save Profile</button>
```

**After - en.json:**

```json
{
  "PROFILE": {
    "SAVE_PROFILE": "Save Profile"
  }
}
```

**After - ar.json:**

```json
{
  "PROFILE": {
    "SAVE_PROFILE": "حفظ الملف الشخصي"
  }
}
```

**After - HTML:**

```html
<button>{{ 'PROFILE.SAVE_PROFILE' | translate }}</button>
```

## Best Practices

1. **Keep Keys Descriptive**: Use clear, self-explanatory key names
2. **Group Related Keys**: Organize under appropriate feature sections
3. **Avoid Hardcoding**: Always use translation keys for user-facing text
4. **Consistent Pluralization**: Use singular/plural consistently
5. **Placeholder Text**: Always translate form placeholders
6. **Error Messages**: Ensure all error messages are translated
7. **Accessibility Labels**: Translate all aria-labels and alt-text

## Testing Language Switching

1. Click the language toggle button in the navigation bar
2. Verify that all text switches to the new language
3. Check that form labels, buttons, and messages are properly translated
4. Ensure RTL layout works correctly for Arabic

## Notes

- Translation keys are NOT included from API responses or TypeScript component properties (as per requirements)
- Only static text visible in HTML templates is translated
- Dynamic data from API calls remains as-is without translation

## Support

For questions or to add new translations, refer to this guide and the translation files in `src/assets/i18n/`
