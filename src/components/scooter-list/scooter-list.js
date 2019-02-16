import React, { Component, Fragment } from "react";
import ScooterListItem from "../scooters-list-item";
import Spinner from "../spinner";
import { connect } from "react-redux";

import { withStoreService } from "../hoc";
import { dataLoaded, dataRequested, dataError } from "../../actions";
import { compose } from "../../utils";

import "./scooter-list.scss";
import ErrorIndicator from "../error-indicator";

class ScooterList extends Component {
  componentDidMount() {
    const {
      datastoreService,
      dataLoaded,
      dataRequested,
      dataError
    } = this.props;
    dataRequested();
    datastoreService
      .getData()
      .then(data => dataLoaded(data))
      .catch(err => dataError(err));
  }

  render() {
    const { scooters, loading, error } = this.props;
    if (error) {
      return <ErrorIndicator />;
    }
    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <h2 className="title">Ты сегодня покормил кота?</h2>
        <ul className="scooter-list">
          {scooters.map(scooter => {
            return (
              <li
                key={scooter.id}
                className="scooter-list-item scooter-list-item__check "
              >
                <ScooterListItem scooter={scooter} />
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ scooters, loading, error }) => {
  return { scooters, loading, error };
};

const mapDispatchToProps = { dataLoaded, dataRequested, dataError };

export default compose(
  withStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ScooterList);
