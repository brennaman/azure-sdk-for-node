/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the JobStatisticsVertexStage class.
 * @constructor
 * The Data Lake Analytics U-SQL job statistics vertex stage information.
 * @member {number} [dataRead] Gets the amount of data read, in bytes.
 * 
 * @member {number} [dataReadCrossPod] Gets the amount of data read across
 * multiple pods, in bytes.
 * 
 * @member {number} [dataReadIntraPod] Gets the amount of data read in one
 * pod, in bytes.
 * 
 * @member {number} [dataToRead] Gets the amount of data remaining to be read,
 * in bytes.
 * 
 * @member {number} [dataWritten] Gets the amount of data written, in bytes.
 * 
 * @member {number} [duplicateDiscardCount] Gets the number of duplicates that
 * were discarded.
 * 
 * @member {number} [failedCount] Gets the number of failures that occured in
 * this stage.
 * 
 * @member {number} [maxVertexDataRead] Gets the maximum amount of data read
 * in a single vertex, in bytes.
 * 
 * @member {number} [minVertexDataRead] Gets the minimum amount of data read
 * in a single vertex, in bytes.
 * 
 * @member {number} [readFailureCount] Gets the number of read failures in
 * this stage.
 * 
 * @member {number} [revocationCount] Gets the number of vertices that were
 * revoked during this stage.
 * 
 * @member {number} [runningCount] Gets the number of currently running
 * vertices in this stage.
 * 
 * @member {number} [scheduledCount] Gets the number of currently scheduled
 * vertices in this stage
 * 
 * @member {string} [stageName] Gets the name of this stage in job execution.
 * 
 * @member {number} [succeededCount] Gets the number of vertices that
 * succeeded in this stage.
 * 
 * @member {number} [tempDataWritten] Gets the amount of temporary data
 * written, in bytes.
 * 
 * @member {number} [totalCount] Gets the total vertex count for this stage.
 * 
 * @member {number} [totalFailedTime] Gets the amount of time that failed
 * vertices took up in this stage.
 * 
 * @member {number} [totalProgress] Gets the current progress of this stage,
 * as a percentage.
 * 
 * @member {number} [totalSucceededTime] Gets the amount of time all
 * successful vertices took in this stage.
 * 
 */
export interface JobStatisticsVertexStage {
    dataRead?: number;
    dataReadCrossPod?: number;
    dataReadIntraPod?: number;
    dataToRead?: number;
    dataWritten?: number;
    duplicateDiscardCount?: number;
    failedCount?: number;
    maxVertexDataRead?: number;
    minVertexDataRead?: number;
    readFailureCount?: number;
    revocationCount?: number;
    runningCount?: number;
    scheduledCount?: number;
    stageName?: string;
    succeededCount?: number;
    tempDataWritten?: number;
    totalCount?: number;
    totalFailedTime?: number;
    totalProgress?: number;
    totalSucceededTime?: number;
}

/**
 * @class
 * Initializes a new instance of the JobStatistics class.
 * @constructor
 * The Data Lake Analytics U-SQL job execution statistics.
 * @member {date} [lastUpdateTimeUtc] Gets the last update time for the
 * statistics.
 * 
 * @member {array} [stages] Gets the list of stages for the job.
 * 
 */
export interface JobStatistics {
    lastUpdateTimeUtc?: Date;
    stages?: JobStatisticsVertexStage[];
}

/**
 * @class
 * Initializes a new instance of the JobDataPath class.
 * @constructor
 * A Data Lake Analytics U-SQL job data path item.
 * @member {string} [jobId] Gets the id of the job this data is for.
 * 
 * @member {string} [command] Gets the command that this job data relates to.
 * 
 * @member {array} [paths] Gets the list of paths to all of the job data.
 * 
 */
export interface JobDataPath {
    jobId?: string;
    command?: string;
    paths?: string[];
}

/**
 * @class
 * Initializes a new instance of the JobStateAuditRecord class.
 * @constructor
 * The Data Lake Analytics U-SQL job state audit records for tracking the
 * lifecycle of a job.
 * @member {string} [newState] Gets the new state the job is in.
 * 
 * @member {date} [timeStamp] Gets the time stamp that the state change took
 * place.
 * 
 * @member {string} [requestedByUser] Gets the user who requests the change.
 * 
 * @member {string} [details] Gets  the details of the audit log.
 * 
 */
export interface JobStateAuditRecord {
    newState?: string;
    timeStamp?: Date;
    requestedByUser?: string;
    details?: string;
}

/**
 * @class
 * Initializes a new instance of the JobResource class.
 * @constructor
 * The Data Lake Analytics U-SQL job resources.
 * @member {string} [name] Gets or set the name of the resource.
 * 
 * @member {string} [resourcePath] Gets or sets the path to the resource.
 * 
 * @member {string} [type] Gets or sets the job resource type. Possible values
 * include: 'VertexResource', 'StatisticsResource'
 * 
 */
export interface JobResource {
    name?: string;
    resourcePath?: string;
    type?: string;
}

/**
 * @class
 * Initializes a new instance of the JobProperties class.
 * @constructor
 * The common Data Lake Analytics job properties.
 * @member {string} [runtimeVersion] Gets or sets the runtime version of the
 * U-SQL engine to use
 * 
 * @member {string} script Gets or sets the U-SQL script to run
 * 
 * @member {string} type Polymorhpic Discriminator
 * 
 */
export interface JobProperties {
    runtimeVersion?: string;
    script: string;
    type: string;
}

/**
 * @class
 * Initializes a new instance of the USqlJobProperties class.
 * @constructor
 * @member {array} [resources] Gets or sets the list of resources that are
 * required by the job
 * 
 * @member {object} [statistics] Gets or sets the job specific statistics.
 * 
 * @member {date} [statistics.lastUpdateTimeUtc] Gets the last update time for
 * the statistics.
 * 
 * @member {array} [statistics.stages] Gets the list of stages for the job.
 * 
 * @member {object} [debugData] Gets or sets the job specific debug data
 * locations.
 * 
 * @member {string} [debugData.jobId] Gets the id of the job this data is for.
 * 
 * @member {string} [debugData.command] Gets the command that this job data
 * relates to.
 * 
 * @member {array} [debugData.paths] Gets the list of paths to all of the job
 * data.
 * 
 * @member {string} [algebraFilePath] Gets the U-SQL algebra file path after
 * the job has completed
 * 
 * @member {string} [totalCompilationTime] Gets the total time this job spent
 * compiling. This value should not be set by the user and will be ignored if
 * it is.
 * 
 * @member {string} [totalPauseTime] Gets the total time this job spent
 * paused. This value should not be set by the user and will be ignored if it
 * is.
 * 
 * @member {string} [totalQueuedTime] Gets the total time this job spent
 * queued. This value should not be set by the user and will be ignored if it
 * is.
 * 
 * @member {string} [totalRunningTime] Gets the total time this job spent
 * executing. This value should not be set by the user and will be ignored if
 * it is.
 * 
 * @member {string} [rootProcessNodeId] Gets the ID used to identify the job
 * manager coordinating job execution. This value should not be set by the
 * user and will be ignored if it is.
 * 
 * @member {string} [yarnApplicationId] Gets the ID used to identify the yarn
 * application executing the job. This value should not be set by the user
 * and will be ignored if it is.
 * 
 * @member {number} [yarnApplicationTimeStamp] Gets the timestamp (in ticks)
 * for the yarn application executing the job. This value should not be set
 * by the user and will be ignored if it is.
 * 
 * @member {string} [compileMode] Gets or sets the compile mode for the job.
 * Possible values include: 'Semantic', 'Full', 'SingleBox'
 * 
 */
export interface USqlJobProperties extends JobProperties {
    resources?: JobResource[];
    statistics?: JobStatistics;
    debugData?: JobDataPath;
    algebraFilePath?: string;
    totalCompilationTime?: string;
    totalPauseTime?: string;
    totalQueuedTime?: string;
    totalRunningTime?: string;
    rootProcessNodeId?: string;
    yarnApplicationId?: string;
    yarnApplicationTimeStamp?: number;
    compileMode?: string;
}

/**
 * @class
 * Initializes a new instance of the HiveJobStatementInfo class.
 * @constructor
 * @member {string} [logLocation] Gets or sets the log location for this
 * statement.
 * 
 * @member {string} [resultPreviewLocation] Gets or sets the result preview
 * location for this statement.
 * 
 * @member {string} [resultLocation] Gets or sets the result location for this
 * statement.
 * 
 * @member {string} [errorMessage] Gets or sets the error message for this
 * statement.
 * 
 */
export interface HiveJobStatementInfo {
    logLocation?: string;
    resultPreviewLocation?: string;
    resultLocation?: string;
    errorMessage?: string;
}

/**
 * @class
 * Initializes a new instance of the HiveJobProperties class.
 * @constructor
 * @member {array} [statementInfo] Gets or sets the statement information for
 * each statement in the script
 * 
 * @member {string} [logsLocation] Gets or sets the Hive logs location
 * 
 * @member {string} [warehouseLocation] Gets or sets the runtime version of
 * the U-SQL engine to use
 * 
 * @member {number} [statementCount] Gets or sets the number of statements
 * that will be run based on the script
 * 
 * @member {number} [executedStatementCount] Gets or sets the number of
 * statements that have been run based on the script
 * 
 */
export interface HiveJobProperties extends JobProperties {
    statementInfo?: HiveJobStatementInfo[];
    logsLocation?: string;
    warehouseLocation?: string;
    statementCount?: number;
    executedStatementCount?: number;
}

/**
 * @class
 * Initializes a new instance of the JobErrorDetails class.
 * @constructor
 * The Data Lake Analytics job error details.
 * @member {string} [description] Gets the error message description
 * 
 * @member {string} [details] Gets the details of the error message.
 * 
 * @member {number} [endOffset] Gets the end offset in the job where the error
 * was found.
 * 
 * @member {string} [errorId] Gets the specific identifier for the type of
 * error encountered in the job.
 * 
 * @member {string} [filePath] Gets the path to any supplemental error files,
 * if any.
 * 
 * @member {string} [helpLink] Gets the link to MSDN or Azure help for this
 * type of error, if any.
 * 
 * @member {string} [internalDiagnostics] Gets the internal diagnostic stack
 * trace if the user requesting the job error details has sufficient
 * permissions it will be retrieved, otherwise it will be empty.
 * 
 * @member {number} [lineNumber] Gets the specific line number in the job
 * where the error occured.
 * 
 * @member {string} [message] Gets the user friendly error message for the
 * failure.
 * 
 * @member {string} [resolution] Gets the recommended resolution for the
 * failure, if any.
 * 
 * @member {object} [innerError] Gets the inner error of this specific job
 * error message, if any.
 * 
 * @member {number} [innerError.diagnosticCode] Gets the diagnostic error code.
 * 
 * @member {string} [innerError.severity] Gets the severity level of the
 * failure. Possible values include: 'Warning', 'Error'
 * 
 * @member {string} [innerError.details] Gets the details of the error message.
 * 
 * @member {string} [innerError.component] Gets the component that failed.
 * 
 * @member {string} [innerError.errorId] Gets the specific identifier for the
 * type of error encountered in the job.
 * 
 * @member {string} [innerError.helpLink] Gets the link to MSDN or Azure help
 * for this type of error, if any.
 * 
 * @member {string} [innerError.internalDiagnostics] Gets the internal
 * diagnostic stack trace if the user requesting the job error details has
 * sufficient permissions it will be retrieved, otherwise it will be empty.
 * 
 * @member {string} [innerError.message] Gets the user friendly error message
 * for the failure.
 * 
 * @member {string} [innerError.resolution] Gets the recommended resolution
 * for the failure, if any.
 * 
 * @member {string} [innerError.source] Gets the ultimate source of the
 * failure (usually either SYSTEM or USER).
 * 
 * @member {string} [innerError.description] Gets the error message description
 * 
 * @member {string} [severity] Gets the severity level of the failure.
 * Possible values include: 'Warning', 'Error'
 * 
 * @member {string} [source] Gets the ultimate source of the failure (usually
 * either SYSTEM or USER).
 * 
 * @member {number} [startOffset] Gets the start offset in the job where the
 * error was found
 * 
 */
export interface JobErrorDetails {
    description?: string;
    details?: string;
    endOffset?: number;
    errorId?: string;
    filePath?: string;
    helpLink?: string;
    internalDiagnostics?: string;
    lineNumber?: number;
    message?: string;
    resolution?: string;
    innerError?: JobInnerError;
    severity?: string;
    source?: string;
    startOffset?: number;
}

/**
 * @class
 * Initializes a new instance of the JobInnerError class.
 * @constructor
 * The Data Lake Analytics job error details.
 * @member {number} [diagnosticCode] Gets the diagnostic error code.
 * 
 * @member {string} [severity] Gets the severity level of the failure.
 * Possible values include: 'Warning', 'Error'
 * 
 * @member {string} [details] Gets the details of the error message.
 * 
 * @member {string} [component] Gets the component that failed.
 * 
 * @member {string} [errorId] Gets the specific identifier for the type of
 * error encountered in the job.
 * 
 * @member {string} [helpLink] Gets the link to MSDN or Azure help for this
 * type of error, if any.
 * 
 * @member {string} [internalDiagnostics] Gets the internal diagnostic stack
 * trace if the user requesting the job error details has sufficient
 * permissions it will be retrieved, otherwise it will be empty.
 * 
 * @member {string} [message] Gets the user friendly error message for the
 * failure.
 * 
 * @member {string} [resolution] Gets the recommended resolution for the
 * failure, if any.
 * 
 * @member {string} [source] Gets the ultimate source of the failure (usually
 * either SYSTEM or USER).
 * 
 * @member {string} [description] Gets the error message description
 * 
 */
export interface JobInnerError {
    diagnosticCode?: number;
    severity?: string;
    details?: string;
    component?: string;
    errorId?: string;
    helpLink?: string;
    internalDiagnostics?: string;
    message?: string;
    resolution?: string;
    source?: string;
    description?: string;
}

/**
 * @class
 * Initializes a new instance of the JobInformation class.
 * @constructor
 * The common Data Lake Analytics job information properties.
 * @member {string} [jobId] Gets or sets the job's unique identifier (a GUID).
 * 
 * @member {string} name Gets or sets the friendly name of the job.
 * 
 * @member {string} type Gets or sets the job type of the current job (Hive or
 * USql). Possible values include: 'USql', 'Hive'
 * 
 * @member {string} [submitter] Gets or sets the user or account that
 * submitted the job.
 * 
 * @member {array} [errorMessage] Gets the error message details for the job,
 * if the job failed.
 * 
 * @member {number} [degreeOfParallelism] Gets or sets the degree of
 * parallelism used for this job. This must be greater than 0.
 * 
 * @member {number} [priority] Gets or sets the priority value for the current
 * job. Lower numbers have a higher priority. By default, a job has a
 * priority of 1000. This must be greater than 0.
 * 
 * @member {date} [submitTime] Gets the time the job was submitted to the
 * service.
 * 
 * @member {date} [startTime] Gets the start time of the job.
 * 
 * @member {date} [endTime] Gets the completion time of the job.
 * 
 * @member {string} [state] Gets the job state. When the job is in the Ended
 * state, refer to Result and ErrorMessage for details. Possible values
 * include: 'Accepted', 'Compiling', 'Ended', 'New', 'Queued', 'Running',
 * 'Scheduling', 'Starting', 'Paused', 'WaitingForCapacity'
 * 
 * @member {string} [result] Gets the result of job execution or the current
 * result of the running job. Possible values include: 'None', 'Succeeded',
 * 'Cancelled', 'Failed'
 * 
 * @member {array} [stateAuditRecords] Gets the job state audit records,
 * indicating when various operations have been performed on this job.
 * 
 * @member {object} properties Gets or sets the job specific properties.
 * 
 * @member {string} [properties.runtimeVersion] Gets or sets the runtime
 * version of the U-SQL engine to use
 * 
 * @member {string} [properties.script] Gets or sets the U-SQL script to run
 * 
 * @member {string} [properties.type] Polymorhpic Discriminator
 * 
 */
export interface JobInformation {
    jobId?: string;
    name: string;
    type: string;
    submitter?: string;
    errorMessage?: JobErrorDetails[];
    degreeOfParallelism?: number;
    priority?: number;
    submitTime?: Date;
    startTime?: Date;
    endTime?: Date;
    state?: string;
    result?: string;
    stateAuditRecords?: JobStateAuditRecord[];
    properties: JobProperties;
}