import { Component, Inject } from '@angular/core';
import html2canvas from 'html2canvas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roundsbuild';

  constructor(public dialog: MatDialog, 
    public snackbar : MatSnackBar){}

    cards = ['card_default.png', 'card_default.png', 'card_default.png', 'card_default.png', 'card_default.png']

    openDialog(index : any): void {
      const dialogRef = this.dialog.open(InventoryComponent, {
        width: '80%',
        height:'80%',
        autoFocus: false,
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        if(result){
          this.cards[index] = result;
        }
      });
    }

    async captureAndCopy() {
    const captureDiv = document.querySelector('.scene') as HTMLDivElement;
    
    try {
      const canvas = await html2canvas(captureDiv);

      const imageBlob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));

      if (imageBlob) {
        const clipboardItems: ClipboardItem[] = [
          new ClipboardItem({ [imageBlob.type]: imageBlob })
        ];

        await navigator.clipboard.write(clipboardItems);

        let snackBarRef = this.snackbar.open('Image captured and copied to clipboard.', 'Ok', { duration: 3000 });

      } else {
        console.error('Erro ao criar Blob da imagem.');
      }
    } catch (error) {
      console.error('Erro ao capturar e copiar a imagem:', error);
    }
  }

}


@Component({
  selector: 'inventory-component',
  templateUrl: 'inventory.component.html',
  styleUrls:['inventory.component.scss'],
  standalone: false,
  // imports: [ MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSnackBarModule, MatProgressSpinnerModule],
})
export class InventoryComponent {

  items : any = [ 'card_default.png', 'image_1.png', 'image_2.png', 'image_3.png', 'image_4.png', 'image_5.png',  'image_6.png', 'image_7.png', 'image_8.png', 'image_9.png', 'image_10.png',  'image_11.png', 'image_12.png', 'image_13.png', 'image_14.png', 'image_15.png',  'image_16.png', 'image_17.png', 'image_18.png', 'image_19.png', 'image_20.png',  'image_21.png', 'image_22.png', 'image_23.png', 'image_24.png', 'image_25.png',  'image_26.png', 'image_27.png', 'image_28.png', 'image_29.png', 'image_30.png',  'image_31.png', 'image_32.png', 'image_33.png', 'image_34.png', 'image_35.png',  'image_36.png', 'image_37.png', 'image_38.png', 'image_39.png', 'image_40.png',  'image_41.png', 'image_42.png', 'image_43.png', 'image_44.png', 'image_45.png',  'image_46.png', 'image_47.png', 'image_48.png', 'image_49.png', 'image_50.png',  'image_51.png', 'image_52.png', 'image_53.png', 'image_54.png', 'image_55.png',  'image_56.png', 'image_57.png', 'image_58.png', 'image_59.png', 'image_60.png',  'image_61.png', 'image_62.png', 'image_63.png', 'image_64.png', 'image_65.png',  'image_66.png', 'image_67.png']
  wordKey : string =  '';
  isLoading : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<InventoryComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.itemsFiltered();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  selectItem(item : any){
    this.dialogRef.close(item);
  }

  async itemsFiltered(){
    this.isLoading = true;
    
    // if(this.wordKey){
    //   this.items = this.allItems.filter((i : any )=> i.name.toLowerCase().includes(this.wordKey.toLowerCase()) || i.description.toLowerCase().includes(this.wordKey.toLowerCase()))
    // }
    // else{
    //   this.items = this.allItems;
    // }

    await new Promise(resolve => setTimeout(resolve, 200));

    this.isLoading = false;
  }



}