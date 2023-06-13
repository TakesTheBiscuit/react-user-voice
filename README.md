# react-user-voice
React implementation of the uservoice agent

## Getting started

- `npm install react-user-voice`

Implement some boilerplate code like this inside one of your top level components or your main/index js files.

- *Replace 'someorg' with your organisation name from UserVoice'*
- *Replace 'someUniqueID' with whatever widget unique ID UserVoice have given you*
- *Alter other params to suit your requirements*

```
import ReactUV from 'react-user-voice';

...

  const uvOptions = {
    debug: true,
    src: 'https://someorg.uservoice.com/widget_environment/someUniqueID.js',
    trigger: { mode: 'satisfaction', trigger_position: 'top-left' },
    colors: {
      accent_color: '#2B78C5',
      trigger_color: 'white',
      trigger_background_color: 'rgba(46, 49, 51, 0.6)',
    },
    identify: {
      email: 'john.doe2@example.com', // User’s email address
      name: 'John Doe 2', // User’s real name
      created_at: 1364406966, // Unix timestamp for the date the user signed up
      id: 321, // Optional: Unique id of the user (if set, this should not change)
      type: 'Org', // Optional: segment your users by type
      account: {
        // Account traits are only available on some plans
        id: 333, // Optional: associate multiple users with a single account
        name: 'Acme, Co.', // Account name
        created_at: 1364406966, // Unix timestamp for the date the account was created
        revenue: 9.99, // Decimal; recurring revenue of the account
        ltv: 1111.0, // Decimal; lifetime value of the account
        plan: 'Enhanced', // Plan name for the account
      },
    },
  };

  ReactUV.initialize(uvOptions);

...

```

## Building locally
- `rm -rf dist`
- `npm i`
- `npm run build`

