import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'inplay', component:InplayComponent },
  { path:'multimarkets', component:MultimarketsComponent },
  { path:'highlights', component:HighlightsComponent },
  { path:'checksportwiseresult', component:ChecksportwiseresultComponent },
  { path:'match', component:MatchComponent },
  { path:'myprofile', component:MyprofileComponent },
  { path:'balanceoverview', component:BalanceoverviewComponent },
  { path:'accountstatement', component:AccountstatementComponent },
  { path:'mybets', component:MybetsComponent },
  { path:'betshistory', component:BetshistoryComponent },
  { path:'profitloss', component:ProfitlossComponent },
  { path:'activitylogs', component:ActivitylogsComponent },
  { path:'balancetransfer', component:BalancetransferComponent },
  { path:'viewwinners', component:ViewwinnersComponent },
  { path:'loginmodel', component:LoginmodelComponent },
  { path:'settingpopup', component:SettingpopupComponent },
  { path:'mobilefooter', component:MobilefooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
