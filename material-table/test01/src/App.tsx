import React from "react";
import { Grid, TextField,  Button } from "@material-ui/core";
import MaterialTable from "material-table";

interface IState {
    text: string;    
}

interface IData {
    val: number;
}

export default class App extends React.Component<{}, IState> {

    private data: IData[];    
    private renderColCnt: number = 0;

    constructor(props: {}) {
        super(props);

        this.state = {
            text: "",            
        }

        this.data = [
            { val: 0 },
            { val: 1 },
            { val: 2 },
        ];        
    }

    public render() {
        return (
            <Grid
                container={true}
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                spacing={24}
            >
                <Grid item={true}>
                    <TextField label="type here" value={this.state.text} onChange={this.onTextChange} />
                </Grid>

                <Grid item={true}>
                    <Button color="primary" variant="contained" onClick={this.addData}>data add</Button>                    
                </Grid> 

                <Grid item={true}>

                    <MaterialTable
                        data={this.data}                        
                        columns={[
                            { field: "val", render: this.renderCol },
                        ]} />

                </Grid>

            </Grid>
        );
    }

    private addData = () => {
        this.data.push({ val: this.data.length });
    }

    private renderCol = (rowData: IData) => {
        ++this.renderColCnt;        
        
        const q = document.getElementById("rendercnt");
        if (q) {
            q.innerText = String(this.renderColCnt);
        }        

        return rowData.val;
    }

    private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: e.target.value });
    }

}
