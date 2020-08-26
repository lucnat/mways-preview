
## Milliways preview

Preview ionic apps with ease.

[<img src="https://i.imgur.com/N6HUtXk.gif" width="80%">](https://i.imgur.com/N6HUtXk.gif>)

## Usage:

#### Step 1 
Add the platform switcher to your ionic app (e.g. for react):

```
import { setupConfig } from '@ionic/react';
const mode = (window.location.search.split('mode=')[1]||'').split('&')[0];
if(mode) setupConfig({mode});
```

#### Step 2
Deploy your ionic app somewhere on the web, e.g. [vercel](https://vercel.com).

#### Step 3
Your app preview is available under [preview.mways.io?previewurl=YOUR-APP-URL](https://preview.mways.io?previewurl=YOUR-APP-URL)


