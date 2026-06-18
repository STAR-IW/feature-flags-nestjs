# Feature Flags with NestJS + LaunchDarkly

Quick feature flags with LaunchDarkly and NestJS practice.

## What it does
Single endpoint that returns a greeting based on a feature flag value in LaunchDarkly.

- Flag **on** → `Good Evening! `
- Flag **off** → `Good Morning! `

## Setup

1. Clone the repo
2. Create a `.env` file in the root:
   ```
   LAUNCHDARKLY_SDK_KEY=your-sdk-key
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run start:dev
   ```
5. Hit the endpoint:
   ```
   GET http://localhost:3000
   ```

## Feature Flag Context

The app targets a user with key `usa`:

```typescript
const context = { kind: 'user', key: 'usa' }
```

To control behavior, go to the LaunchDarkly dashboard and update the targeting rules for the `time_feature` flag — you can target specific users by key or roll out to a percentage of all users.

