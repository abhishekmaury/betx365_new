import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InplayComponent } from './inplay/inplay.component';
import { MultimarketsComponent } from './multimarkets/multimarkets.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ChecksportwiseresultComponent } from './checksportwiseresult/checksportwiseresult.component';
import { MatchComponent } from './match/match.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'inplay', component:InplayComponent },
  { path:'multimarkets', component:MultimarketsComponent },
  { path:'highlights', component:HighlightsComponent },
  { path:'checksportwiseresult', component:ChecksportwiseresultComponent },
  { path:'match', component:MatchComponent },
  { path:'myprofile', component:MyprofileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
