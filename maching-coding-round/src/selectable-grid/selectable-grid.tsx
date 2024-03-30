import { useState } from 'react'
import './styles.css'

const rows = 10
const columns = 15
// const grid = new Array(rows).fill([]).map( _ => new Array(columns).fill(0))
const log = console.log


export default function SelectableGrid () {
  let count = 1
  const [selectionBegin, setSelectionBegin] = useState<boolean>(false)
  const [grid, setGrid] = useState(new Array(rows).fill([]).map( _ => new Array(columns).fill(0)))

  const startSelectectionHandler = function(i: number, j:number) {
    setSelectionBegin(true)
    const Grid = [...grid]
    Grid[i][j] = 1
    setGrid(Grid)
    log('selection started')
  }

  const mouseMoveHandler = function(i: number, j:number) {
    if(selectionBegin){
      const Grid = [...grid]
      Grid[i][j] = 1
      setGrid(Grid)
    }
    log('grid is', grid)
  }

  const mouseUpHandler = function() {
    setSelectionBegin(false)
  }

  return (
    <div className="selectable-grid-container">
      {
        new Array(rows).fill(1).map((_,idx) => (
          <div className="selectable-grid-container__row" key={idx}>
            {
              new Array(columns).fill(1).map((_, jdx) => (
                <div 
                  className="selected-grid-column"
                  key={jdx}
                  onMouseMove={() => mouseMoveHandler(idx, jdx)}
                  onMouseDown={() => startSelectectionHandler(idx, jdx)}
                  onMouseUp={mouseUpHandler}
                  style={{
                    backgroundColor: grid[idx][jdx] === 1 ? 'red' : 'white'
                  }}
                >
                  {count++}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}