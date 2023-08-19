import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { InplayComponent } from './inplay/inplay.component';
import { MultimarketsComponent } from './multimarkets/multimarkets.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ChecksportwiseresultComponent } from './checksportwiseresult/checksportwiseresult.component';
import { MatchComponent } from './match/match.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BalanceoverviewComponent } from './balanceoverview/balanceoverview.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { MybetsComponent } from './mybets/mybets.component';
import { BetshistoryComponent } from './betshistory/betshistory.component';
import { ProfitlossComponent } from './profitloss/profitloss.component';
import { ActivitylogsComponent } from './activitylogs/activitylogs.component';
import { BalancetransferComponent } from './balancetransfer/balancetransfer.component';
import { ViewwinnersComponent } from './viewwinners/viewwinners.component';
import { LoginmodelComponent } from './loginmodel/loginmodel.component';
import { SettingpopupComponent } from './settingpopup/settingpopup.component';
import { MobilefooterComponent } from './mobilefooter/mobilefooter.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    InplayComponent,
    MultimarketsComponent,
    HighlightsComponent,
    ChecksportwiseresultComponent,
    MatchComponent,
    MyprofileComponent,
    BalanceoverviewComponent,
    AccountstatementComponent,
    MybetsComponent,
    BetshistoryComponent,
    ProfitlossComponent,
    ActivitylogsComponent,
    BalancetransferComponent,
    ViewwinnersComponent,
    LoginmodelComponent,
    SettingpopupComponent,
    MobilefooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
