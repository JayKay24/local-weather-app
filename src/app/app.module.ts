import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, FlexLayoutModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
