import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// bootstrapApplication(AppComponent,
//   {
//     providers: [
//       provideProtractorTestingSupport(),
//       provideRouter(routeConfig)
//     ]
//   }
// ).catch(err => console.error(err));