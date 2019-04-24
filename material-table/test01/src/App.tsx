import React from "react";
import { Grid, TextField, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from "@material-ui/core";
import MaterialTable, { Column } from "material-table";

interface IState {
    text: string;
    dataAge: number;
}

interface IData {
    val: number;
}

export default class App extends React.Component<{}, IState> {

    private data: IData[];
    private spanRef: React.RefObject<HTMLInputElement>;
    private renderColCnt: number = 0;

    constructor(props: {}) {
        super(props);

        this.state = {
            text: "",
            dataAge: -1,
        }

        this.data = [
            { val: 0 },
            { val: 1 },
            { val: 2 },
        ];

        this.spanRef = React.createRef();
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

                    <Button color="default" variant="contained" onClick={this.incrementAge}>age increment</Button>
                </Grid>

                <Grid item={true}>
                    Render (col) : <TextField disabled={true} inputRef={this.spanRef} />
                    AGE (data) : {this.state.dataAge}
                </Grid>

                <Grid item={true}>

                    <MaterialTable
                        data={this.data}
                        dataAge={this.state.dataAge}
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

    private incrementAge = () => {
        if (this.state.dataAge === undefined) {
            this.setState({ dataAge: 0 });
        } else {
            this.setState({ dataAge: this.state.dataAge + 1 });
        }
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
