/**
 * JMeter Performance Tests - Performance Testing
 * Hotel Room Booking System
 * Test Cases: JMX-01 to JMX-20
 * 
 * This file contains 20 performance test scenarios covering:
 * 1️⃣ Load Testing - Normal users (50-100)
 * 2️⃣ Stress Testing - System break होईपर्यंत
 * 3️⃣ Spike Testing - Sudden load increase
 * 4️⃣ Endurance Testing - Long time run
 */

const jmeterTests = {
  testPlans: [
    // =============== LOAD TESTING ===============
    {
      id: 'JMX-01',
      name: 'Load Test - Baseline (1 User)',
      type: 'Load Testing',
      threads: 1,
      rampUp: 1,
      duration: 60,
      description: 'Baseline performance with single user',
      endpoints: ['/api/rooms', '/api/bookings'],
      expectedResponseTime: 250,
      expectedThroughput: 60,
      expectedErrorRate: 0
    },

    {
      id: 'JMX-02',
      name: 'Load Test - Light Load (10 Users)',
      type: 'Load Testing',
      threads: 10,
      rampUp: 10,
      duration: 120,
      description: 'Light load with 10 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/auth/login'],
      expectedResponseTime: 300,
      expectedThroughput: 200,
      expectedErrorRate: 0.1
    },

    {
      id: 'JMX-03',
      name: 'Load Test - Normal Load (50 Users)',
      type: 'Load Testing',
      threads: 50,
      rampUp: 30,
      duration: 180,
      description: 'Normal load with 50 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/reviews', '/api/auth/login'],
      expectedResponseTime: 350,
      expectedThroughput: 500,
      expectedErrorRate: 0.5
    },

    {
      id: 'JMX-04',
      name: 'Load Test - Heavy Load (100 Users)',
      type: 'Load Testing',
      threads: 100,
      rampUp: 60,
      duration: 300,
      description: 'Heavy load with 100 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/reviews'],
      expectedResponseTime: 400,
      expectedThroughput: 800,
      expectedErrorRate: 1.0
    },

    {
      id: 'JMX-05',
      name: 'Load Test - Very Heavy Load (150 Users)',
      type: 'Load Testing',
      threads: 150,
      rampUp: 90,
      duration: 300,
      description: 'Very heavy load - stress point identification',
      endpoints: ['/api/rooms', '/api/bookings'],
      expectedResponseTime: 450,
      expectedThroughput: 1000,
      expectedErrorRate: 2.0
    },

    // =============== STRESS TESTING ===============
    {
      id: 'JMX-06',
      name: 'Stress Test - Push to Limits (200 Users)',
      type: 'Stress Testing',
      threads: 200,
      rampUp: 120,
      duration: 300,
      description: 'System break point identification - 200 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/auth/login', '/api/reviews'],
      expectedResponseTime: 600,
      expectedThroughput: 1500,
      expectedErrorRate: 5.0,
      monitoring: ['CPU', 'Memory', 'Database Connections']
    },

    {
      id: 'JMX-07',
      name: 'Stress Test - Breaking Point (300 Users)',
      type: 'Stress Testing',
      threads: 300,
      rampUp: 150,
      duration: 300,
      description: 'Find system breaking point - 300 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings'],
      expectedResponseTime: 1000,
      expectedThroughput: 2000,
      expectedErrorRate: 10.0,
      monitoring: ['CPU', 'Memory', 'Database Connections', 'GC']
    },

    {
      id: 'JMX-08',
      name: 'Stress Test - Extreme (500 Users)',
      type: 'Stress Testing',
      threads: 500,
      rampUp: 200,
      duration: 300,
      description: 'Extreme stress - system breaking point',
      endpoints: ['/api/rooms'],
      expectedResponseTime: 2000,
      expectedThroughput: 3000,
      expectedErrorRate: 20.0,
      monitoring: ['CPU', 'Memory', 'Database Connections', 'GC', 'Thread Count']
    },

    // =============== SPIKE TESTING ===============
    {
      id: 'JMX-09',
      name: 'Spike Test - Sudden 50 to 200 Users',
      type: 'Spike Testing',
      threads: 200,
      rampUp: 5,
      duration: 180,
      description: 'Sudden load increase from normal to 200 users',
      endpoints: ['/api/rooms', '/api/bookings'],
      expectedResponseTime: 500,
      expectedThroughput: 1000,
      expectedErrorRate: 3.0,
      recoveryTime: 30
    },

    {
      id: 'JMX-10',
      name: 'Spike Test - Flash Spike (300 Users)',
      type: 'Spike Testing',
      threads: 300,
      rampUp: 2,
      duration: 120,
      description: 'Flash spike - immediate 300 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/reviews'],
      expectedResponseTime: 800,
      expectedThroughput: 1500,
      expectedErrorRate: 8.0,
      recoveryTime: 60
    },

    {
      id: 'JMX-11',
      name: 'Spike Test - Multiple Spikes',
      type: 'Spike Testing',
      threads: 250,
      rampUp: 5,
      duration: 600,
      description: 'Multiple consecutive spikes in load',
      spikes: [
        { startTime: 0, users: 50 },
        { startTime: 60, users: 250 },
        { startTime: 180, users: 50 },
        { startTime: 240, users: 250 }
      ],
      expectedRecoveryCount: 4,
      monitoring: ['Response Time', 'Error Rate', 'Recovery Time']
    },

    // =============== ENDURANCE TESTING ===============
    {
      id: 'JMX-12',
      name: 'Endurance Test - 10 Minutes @ 50 Users',
      type: 'Endurance Testing',
      threads: 50,
      rampUp: 30,
      duration: 600,
      description: 'Long running test - 10 minutes at 50 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/auth/login'],
      expectedResponseTime: 350,
      expectedThroughput: 500,
      expectedErrorRate: 0.5,
      monitoring: ['Memory', 'GC', 'Database Connections'],
      memoryLeakDetection: true
    },

    {
      id: 'JMX-13',
      name: 'Endurance Test - 30 Minutes @ 75 Users',
      type: 'Endurance Testing',
      threads: 75,
      rampUp: 45,
      duration: 1800,
      description: 'Extended endurance - 30 minutes at 75 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/reviews', '/api/auth/login'],
      expectedResponseTime: 400,
      expectedThroughput: 750,
      expectedErrorRate: 1.0,
      monitoring: ['Memory', 'GC', 'Database Connections', 'Heap Dump'],
      memoryLeakDetection: true,
      heapDumpInterval: 300
    },

    {
      id: 'JMX-14',
      name: 'Endurance Test - 1 Hour @ 100 Users',
      type: 'Endurance Testing',
      threads: 100,
      rampUp: 60,
      duration: 3600,
      description: 'Full hour endurance test - 100 concurrent users',
      endpoints: ['/api/rooms', '/api/bookings', '/api/reviews'],
      expectedResponseTime: 450,
      expectedThroughput: 1000,
      expectedErrorRate: 2.0,
      monitoring: ['Memory', 'GC', 'Database Connections', 'Connection Pool', 'Cache'],
      memoryLeakDetection: true,
      heapDumpInterval: 600,
      cpuThreshold: 80
    },

    // =============== SPECIALIZED PERFORMANCE TESTS ===============
    {
      id: 'JMX-15',
      name: 'Database Stress - High Read/Write',
      type: 'Performance',
      threads: 100,
      rampUp: 60,
      duration: 300,
      description: 'Database stress with high read/write operations',
      endpoints: ['/api/bookings', '/api/reviews'],
      queryType: 'Mixed (70% Read, 30% Write)',
      expectedResponseTime: 400,
      monitoring: ['Database Connections', 'Query Time', 'Lock Wait Time'],
      databaseMonitoring: true
    },

    {
      id: 'JMX-16',
      name: 'Cache Effectiveness - 50 Users',
      type: 'Performance',
      threads: 50,
      rampUp: 30,
      duration: 300,
      description: 'Test cache hit rate and effectiveness',
      endpoints: ['/api/rooms'],
      caching: true,
      expectedCacheHitRate: 60,
      expectedResponseTime: 250,
      monitoring: ['Cache Hit Rate', 'Response Time']
    },

    {
      id: 'JMX-17',
      name: 'Concurrent Session Test - 100 Users',
      type: 'Performance',
      threads: 100,
      rampUp: 60,
      duration: 300,
      description: 'Test concurrent session management',
      endpoints: ['/api/auth/login', '/api/bookings'],
      sessionManagement: true,
      expectedConcurrentSessions: 100,
      sessionTimeout: 30,
      monitoring: ['Active Sessions', 'Session Creation Rate']
    },

    {
      id: 'JMX-18',
      name: 'API Response Time Distribution',
      type: 'Performance',
      threads: 50,
      rampUp: 30,
      duration: 300,
      description: 'Analyze response time percentiles',
      endpoints: ['/api/rooms', '/api/bookings', '/api/reviews'],
      expectedPercentiles: {
        p50: 300,
        p75: 400,
        p95: 600,
        p99: 800
      },
      monitoring: ['Response Time Percentiles']
    },

    {
      id: 'JMX-19',
      name: 'Error Rate Analysis - Invalid Requests',
      type: 'Performance',
      threads: 50,
      rampUp: 30,
      duration: 300,
      description: 'Test error handling with invalid requests (20% invalid)',
      endpoints: ['/api/bookings', '/api/reviews'],
      invalidRequestRate: 20,
      expectedErrorRate: 20,
      monitoring: ['Error Rate', 'Error Types', 'Response Status Codes']
    },

    {
      id: 'JMX-20',
      name: 'Throughput Measurement - Peak Load',
      type: 'Performance',
      threads: 150,
      rampUp: 90,
      duration: 300,
      description: 'Measure maximum throughput at peak load',
      endpoints: ['/api/rooms', '/api/bookings'],
      expectedThroughput: 2000,
      monitoring: ['Requests/Second', 'Bytes/Second', 'Response Time']
    }
  ],

  // Helper functions
  generateJMeterConfig: function(testPlan) {
    return {
      testPlanName: testPlan.name,
      threadGroupConfig: {
        numThreads: testPlan.threads,
        rampUpPeriod: testPlan.rampUp,
        duration: testPlan.duration,
        holdLoad: testPlan.duration - testPlan.rampUp
      },
      httpSamplers: testPlan.endpoints.map(endpoint => ({
        path: endpoint,
        method: endpoint.includes('POST') ? 'POST' : 'GET',
        responseTimeout: testPlan.expectedResponseTime * 2
      })),
      monitoring: testPlan.monitoring || []
    };
  },

  getMonitoringConfig: function(testPlan) {
    return {
      enableJMeterMonitoring: true,
      metrics: testPlan.monitoring || ['Response Time', 'Throughput', 'Error Rate'],
      samplingInterval: 1000,
      aggregateResults: true,
      generateGraphs: true
    };
  },

  validateResults: function(results, testPlan) {
    const errors = [];

    if (results.avgResponseTime > testPlan.expectedResponseTime) {
      errors.push(`Response time exceeded: ${results.avgResponseTime}ms vs ${testPlan.expectedResponseTime}ms`);
    }

    if (results.errorRate > testPlan.expectedErrorRate) {
      errors.push(`Error rate exceeded: ${results.errorRate}% vs ${testPlan.expectedErrorRate}%`);
    }

    if (results.throughput < testPlan.expectedThroughput) {
      errors.push(`Throughput below expected: ${results.throughput} vs ${testPlan.expectedThroughput}`);
    }

    return {
      passed: errors.length === 0,
      errors: errors,
      warnings: []
    };
  }
};

// Export for use
module.exports = {
  jmeterTests,
  testPlans: jmeterTests.testPlans,
  generateJMeterConfig: jmeterTests.generateJMeterConfig,
  getMonitoringConfig: jmeterTests.getMonitoringConfig,
  validateResults: jmeterTests.validateResults
};

// JMeter test plan summary
console.log(`
========================================
JMeter Performance Test Suite Summary
========================================
Total Test Plans: ${jmeterTests.testPlans.length}

Load Testing: 5 scenarios (1-100 users)
Stress Testing: 3 scenarios (breaking point)
Spike Testing: 3 scenarios (sudden increases)
Endurance Testing: 4 scenarios (long-running)
Specialized Tests: 5 scenarios (DB, Cache, Sessions)

Key Metrics Monitored:
- Response Time (Average, Min, Max, Percentiles)
- Throughput (Requests/sec)
- Error Rate (%)
- CPU & Memory Usage
- Database Connections
- GC Pause Time
- Cache Hit Rate
- Active Sessions
========================================
`);
