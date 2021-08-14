import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
    Datafuse is an open source one-stop Data Cloud solution that helps you implement 
    a cloud-native Data Cloud. It supports database pooling operation and maintenance, 
    multi-tenant isolation, and more.
      </>
    ),
  },
  {
    title: 'High Elasticity',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Dynamically scaling storage and compute resources, Datafuse is sufficient to meet all your business needs. The underlying storage supports the S3 storage solution, and you can easily access it through the SQL interface.
      </>
    ),
  },
  {
    title: 'Ecological Compatibility',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Datafuse is compatible with MySQL and Clickhouse protocols and can be easily connected via JDBC. Our services can be easily integrated into your application without changes. Let us focus more on data usage and performance optimization.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  // <Svg className={styles.featureSvg} alt={title} />
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
