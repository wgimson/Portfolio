import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoFilter'
})
export class RepoFilterPipe implements PipeTransform {

  transform(names: string[]): any {
    debugger;
    const _repos = ['St-Boniface', 'Stockify', 'Treeme', 'MedBud', 'TrailBuddy2'];
    const _tRepo: any[] = [];
    for (let name of names) {
      if (_repos.includes(name)) {
        return name;
      }
      return null;
    }
  }

}
