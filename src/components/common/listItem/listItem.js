import React from 'react';
import { Grid, GridColumn, Button, TitleCard, TitleMuted, TitleThin, Text, Box } from '../../styled';

const ListItem = props => {
    const { item, haveItem, handleAdd, handleRemove } = props;

    //Ruby gem properties
    const { name, version, info, downloads, sha } = item;
    const truncatedInfo = `${info.substring(0, 120)}...`;

    return (
        <Grid className="list-item">
            <GridColumn alignItems="flex-start" flex="auto">
                <Grid>
                    <TitleCard data-test="list-item-name">{name}</TitleCard>
                    <TitleMuted data-test="list-item-version">{version}</TitleMuted>
                </Grid>

                <Text data-test="list-item-info">{truncatedInfo}</Text>

                <Grid width="100%">
                    {haveItem
                        ? <Box data-test="list-item-remove-button" flex="auto">
                        <Button type="button" onClick={() => handleRemove(sha)}>Remove</Button>
                    </Box>
                        : <Box data-test="list-item-save-button" flex="auto">
                        <Button type="button" onClick={() => handleAdd(item)}>Save</Button>
                    </Box>
                    }

                    <GridColumn alignItems="flex-end">
                        <TitleCard data-test="list-item-downloads">{downloads}</TitleCard>
                        <TitleThin>DOWNLOADS</TitleThin>
                    </GridColumn>
                </Grid>

            </GridColumn>
        </Grid>
    )
}

export default ListItem;