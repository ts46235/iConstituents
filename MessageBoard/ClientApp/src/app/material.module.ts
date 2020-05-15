import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatTableModule],
  exports: [MatButtonModule, MatInputModule, MatTableModule],
})

//import { NgModule } from '@angular/core';
//import { MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
//import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatRadioModule } from '@angular/material/radio';
//import { MatSelectModule } from '@angular/material/select';
//import { MatSliderModule } from '@angular/material/slider';
//import { MatDividerModule } from '@angular/material/divider';

//@NgModule({
//  imports: [MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
//  exports: [MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatTableModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],

//})
export class NgMatModule { }
